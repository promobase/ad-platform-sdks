// This file is generated. Do not edit by hand.
import { Schema } from "effect";

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

export type BudgetChangeType = "PERCENT" | string;
export type BudgetChangeTypeEncoded = "PERCENT" | string;
export const BudgetChangeType: Schema.Schema<BudgetChangeType, BudgetChangeTypeEncoded, never> = Schema.Union(Schema.Literal("PERCENT"), Schema.String);

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
  readonly error?: ReadonlyArray<Inline9>;
  readonly success?: ReadonlyArray<Inline10>;
}
export interface BudgetUsageCampaignResponseEncoded {
  readonly error?: ReadonlyArray<Inline9Encoded>;
  readonly success?: ReadonlyArray<Inline10Encoded>;
}
export const BudgetUsageCampaignResponse: Schema.Schema<BudgetUsageCampaignResponse, BudgetUsageCampaignResponseEncoded, never> = Schema.Struct({
  error: Schema.optional(Schema.Array(Schema.suspend(() => Inline9))),
  success: Schema.optional(Schema.Array(Schema.suspend(() => Inline10))),
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

export type ComparisonOperator = "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | string;
export type ComparisonOperatorEncoded = "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | string;
export const ComparisonOperator: Schema.Schema<ComparisonOperator, ComparisonOperatorEncoded, never> = Schema.Union(Schema.Literal("GREATER_THAN", "GREATER_THAN_OR_EQUAL_TO", "LESS_THAN", "LESS_THAN_OR_EQUAL_TO"), Schema.String);

export interface CreateAssociatedBudgetRulesForSDCampaignsParams {
  readonly campaignId: number;
  readonly budgetRuleIds?: ReadonlyArray<string>;
}
export interface CreateAssociatedBudgetRulesForSDCampaignsParamsEncoded {
  readonly campaignId: number;
  readonly budgetRuleIds?: ReadonlyArray<string>;
}
export const CreateAssociatedBudgetRulesForSDCampaignsParams: Schema.Schema<CreateAssociatedBudgetRulesForSDCampaignsParams, CreateAssociatedBudgetRulesForSDCampaignsParamsEncoded, never> = Schema.Struct({
  campaignId: Schema.Number,
  budgetRuleIds: Schema.optional(Schema.Array(Schema.String)),
});

export interface CreateAssociatedBudgetRulesForSDCampaignsResponse {

}
export interface CreateAssociatedBudgetRulesForSDCampaignsResponseEncoded {

}
export const CreateAssociatedBudgetRulesForSDCampaignsResponse: Schema.Schema<CreateAssociatedBudgetRulesForSDCampaignsResponse, CreateAssociatedBudgetRulesForSDCampaignsResponseEncoded, never> = Schema.Struct({

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
  readonly responses?: ReadonlyArray<Inline15>;
}
export interface CreateAssociatedBudgetRulesResponseEncoded {
  readonly responses?: ReadonlyArray<Inline15Encoded>;
}
export const CreateAssociatedBudgetRulesResponse: Schema.Schema<CreateAssociatedBudgetRulesResponse, CreateAssociatedBudgetRulesResponseEncoded, never> = Schema.Struct({
  responses: Schema.optional(Schema.Array(Schema.suspend(() => Inline15))),
});

export interface CreateBrandSafetyDenyListDomainsParams {
  readonly domains: ReadonlyArray<Inline345>;
}
export interface CreateBrandSafetyDenyListDomainsParamsEncoded {
  readonly domains: ReadonlyArray<Inline345Encoded>;
}
export const CreateBrandSafetyDenyListDomainsParams: Schema.Schema<CreateBrandSafetyDenyListDomainsParams, CreateBrandSafetyDenyListDomainsParamsEncoded, never> = Schema.Struct({
  domains: Schema.Array(Schema.suspend(() => Inline345)),
});

export interface CreateBrandSafetyDenyListDomainsResponse {
  readonly data: Inline347;
}
export interface CreateBrandSafetyDenyListDomainsResponseEncoded {
  readonly data: Inline347Encoded;
}
export const CreateBrandSafetyDenyListDomainsResponse: Schema.Schema<CreateBrandSafetyDenyListDomainsResponse, CreateBrandSafetyDenyListDomainsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline347),
});

export interface CreateBudgetRulesForSDCampaignsParams {
  readonly budgetRulesDetails?: ReadonlyArray<Inline354>;
}
export interface CreateBudgetRulesForSDCampaignsParamsEncoded {
  readonly budgetRulesDetails?: ReadonlyArray<Inline354Encoded>;
}
export const CreateBudgetRulesForSDCampaignsParams: Schema.Schema<CreateBudgetRulesForSDCampaignsParams, CreateBudgetRulesForSDCampaignsParamsEncoded, never> = Schema.Struct({
  budgetRulesDetails: Schema.optional(Schema.Array(Schema.suspend(() => Inline354))),
});

export interface CreateBudgetRulesForSDCampaignsResponse {

}
export interface CreateBudgetRulesForSDCampaignsResponseEncoded {

}
export const CreateBudgetRulesForSDCampaignsResponse: Schema.Schema<CreateBudgetRulesForSDCampaignsResponse, CreateBudgetRulesForSDCampaignsResponseEncoded, never> = Schema.Struct({

});

export interface CreateBudgetRulesResponse {
  readonly responses?: ReadonlyArray<Inline17>;
}
export interface CreateBudgetRulesResponseEncoded {
  readonly responses?: ReadonlyArray<Inline17Encoded>;
}
export const CreateBudgetRulesResponse: Schema.Schema<CreateBudgetRulesResponse, CreateBudgetRulesResponseEncoded, never> = Schema.Struct({
  responses: Schema.optional(Schema.Array(Schema.suspend(() => Inline17))),
});

export interface CreateSDBudgetRulesRequest {
  readonly budgetRulesDetails?: ReadonlyArray<Inline19>;
}
export interface CreateSDBudgetRulesRequestEncoded {
  readonly budgetRulesDetails?: ReadonlyArray<Inline19Encoded>;
}
export const CreateSDBudgetRulesRequest: Schema.Schema<CreateSDBudgetRulesRequest, CreateSDBudgetRulesRequestEncoded, never> = Schema.Struct({
  budgetRulesDetails: Schema.optional(Schema.Array(Schema.suspend(() => Inline19))),
});

export interface CreateSnapshotParams {
  readonly recordType: string;
  readonly stateFilter?: string;
  readonly tacticFilter?: string;
}
export interface CreateSnapshotParamsEncoded {
  readonly recordType: string;
  readonly stateFilter?: string;
  readonly tacticFilter?: string;
}
export const CreateSnapshotParams: Schema.Schema<CreateSnapshotParams, CreateSnapshotParamsEncoded, never> = Schema.Struct({
  recordType: Schema.String,
  stateFilter: Schema.optional(Schema.String),
  tacticFilter: Schema.optional(Schema.String),
});

export interface CreateSnapshotResponse {
  readonly data: Inline330;
}
export interface CreateSnapshotResponseEncoded {
  readonly data: Inline330Encoded;
}
export const CreateSnapshotResponse: Schema.Schema<CreateSnapshotResponse, CreateSnapshotResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline330),
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

export interface DeleteBrandSafetyDenyListParams {

}
export interface DeleteBrandSafetyDenyListParamsEncoded {

}
export const DeleteBrandSafetyDenyListParams: Schema.Schema<DeleteBrandSafetyDenyListParams, DeleteBrandSafetyDenyListParamsEncoded, never> = Schema.Struct({

});

export interface DeleteBrandSafetyDenyListResponse {
  readonly data: Inline339;
}
export interface DeleteBrandSafetyDenyListResponseEncoded {
  readonly data: Inline339Encoded;
}
export const DeleteBrandSafetyDenyListResponse: Schema.Schema<DeleteBrandSafetyDenyListResponse, DeleteBrandSafetyDenyListResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline339),
});

export interface DisassociateAssociatedBudgetRuleForSDCampaignsParams {
  readonly campaignId: number;
  readonly budgetRuleId: string;
}
export interface DisassociateAssociatedBudgetRuleForSDCampaignsParamsEncoded {
  readonly campaignId: number;
  readonly budgetRuleId: string;
}
export const DisassociateAssociatedBudgetRuleForSDCampaignsParams: Schema.Schema<DisassociateAssociatedBudgetRuleForSDCampaignsParams, DisassociateAssociatedBudgetRuleForSDCampaignsParamsEncoded, never> = Schema.Struct({
  campaignId: Schema.Number,
  budgetRuleId: Schema.String,
});

export interface DisassociateAssociatedBudgetRuleForSDCampaignsResponse {
  readonly data: Inline398;
}
export interface DisassociateAssociatedBudgetRuleForSDCampaignsResponseEncoded {
  readonly data: Inline398Encoded;
}
export const DisassociateAssociatedBudgetRuleForSDCampaignsResponse: Schema.Schema<DisassociateAssociatedBudgetRuleForSDCampaignsResponse, DisassociateAssociatedBudgetRuleForSDCampaignsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline398),
});

export interface DisassociateAssociatedBudgetRuleResponse {

}
export interface DisassociateAssociatedBudgetRuleResponseEncoded {

}
export const DisassociateAssociatedBudgetRuleResponse: Schema.Schema<DisassociateAssociatedBudgetRuleResponse, DisassociateAssociatedBudgetRuleResponseEncoded, never> = Schema.Struct({

});

export interface DownloadSnapshotByIdParams {
  readonly snapshotId: string;
}
export interface DownloadSnapshotByIdParamsEncoded {
  readonly snapshotId: string;
}
export const DownloadSnapshotByIdParams: Schema.Schema<DownloadSnapshotByIdParams, DownloadSnapshotByIdParamsEncoded, never> = Schema.Struct({
  snapshotId: Schema.String,
});

export interface DownloadSnapshotByIdResponse {
  readonly data: Inline411;
}
export interface DownloadSnapshotByIdResponseEncoded {
  readonly data: Inline411Encoded;
}
export const DownloadSnapshotByIdResponse: Schema.Schema<DownloadSnapshotByIdResponse, DownloadSnapshotByIdResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline411),
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

export interface GetBudgetRuleByRuleIdForSDCampaignsParams {
  readonly budgetRuleId: string;
}
export interface GetBudgetRuleByRuleIdForSDCampaignsParamsEncoded {
  readonly budgetRuleId: string;
}
export const GetBudgetRuleByRuleIdForSDCampaignsParams: Schema.Schema<GetBudgetRuleByRuleIdForSDCampaignsParams, GetBudgetRuleByRuleIdForSDCampaignsParamsEncoded, never> = Schema.Struct({
  budgetRuleId: Schema.String,
});

export interface GetBudgetRuleByRuleIdForSDCampaignsResponse {
  readonly data: Inline379;
}
export interface GetBudgetRuleByRuleIdForSDCampaignsResponseEncoded {
  readonly data: Inline379Encoded;
}
export const GetBudgetRuleByRuleIdForSDCampaignsResponse: Schema.Schema<GetBudgetRuleByRuleIdForSDCampaignsResponse, GetBudgetRuleByRuleIdForSDCampaignsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline379),
});

export interface GetCampaignsAssociatedWithSDBudgetRuleParams {
  readonly budgetRuleId: string;
  readonly nextToken?: string;
  readonly pageSize: number;
}
export interface GetCampaignsAssociatedWithSDBudgetRuleParamsEncoded {
  readonly budgetRuleId: string;
  readonly nextToken?: string;
  readonly pageSize: number;
}
export const GetCampaignsAssociatedWithSDBudgetRuleParams: Schema.Schema<GetCampaignsAssociatedWithSDBudgetRuleParams, GetCampaignsAssociatedWithSDBudgetRuleParamsEncoded, never> = Schema.Struct({
  budgetRuleId: Schema.String,
  nextToken: Schema.optional(Schema.String),
  pageSize: Schema.Number,
});

export interface GetCampaignsAssociatedWithSDBudgetRuleResponse {
  readonly data: Inline386;
}
export interface GetCampaignsAssociatedWithSDBudgetRuleResponseEncoded {
  readonly data: Inline386Encoded;
}
export const GetCampaignsAssociatedWithSDBudgetRuleResponse: Schema.Schema<GetCampaignsAssociatedWithSDBudgetRuleResponse, GetCampaignsAssociatedWithSDBudgetRuleResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline386),
});

export interface GetHeadlineRecommendationsForSDParams {
  readonly adFormat?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly maxNumRecommendations?: number;
}
export interface GetHeadlineRecommendationsForSDParamsEncoded {
  readonly adFormat?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly maxNumRecommendations?: number;
}
export const GetHeadlineRecommendationsForSDParams: Schema.Schema<GetHeadlineRecommendationsForSDParams, GetHeadlineRecommendationsForSDParamsEncoded, never> = Schema.Struct({
  adFormat: Schema.optional(Schema.String),
  asins: Schema.optional(Schema.Array(Schema.String)),
  maxNumRecommendations: Schema.optional(Schema.Number),
});

export interface GetHeadlineRecommendationsForSDResponse {
  readonly data: Inline405;
}
export interface GetHeadlineRecommendationsForSDResponseEncoded {
  readonly data: Inline405Encoded;
}
export const GetHeadlineRecommendationsForSDResponse: Schema.Schema<GetHeadlineRecommendationsForSDResponse, GetHeadlineRecommendationsForSDResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline405),
});

export interface GetRequestResultsParams {
  readonly requestId: string;
  readonly startIndex?: number;
  readonly count?: number;
}
export interface GetRequestResultsParamsEncoded {
  readonly requestId: string;
  readonly startIndex?: number;
  readonly count?: number;
}
export const GetRequestResultsParams: Schema.Schema<GetRequestResultsParams, GetRequestResultsParamsEncoded, never> = Schema.Struct({
  requestId: Schema.String,
  startIndex: Schema.optional(Schema.Number),
  count: Schema.optional(Schema.Number),
});

export interface GetRequestResultsResponse {
  readonly data: Inline333;
}
export interface GetRequestResultsResponseEncoded {
  readonly data: Inline333Encoded;
}
export const GetRequestResultsResponse: Schema.Schema<GetRequestResultsResponse, GetRequestResultsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline333),
});

export interface GetRequestStatusParams {
  readonly requestId: string;
}
export interface GetRequestStatusParamsEncoded {
  readonly requestId: string;
}
export const GetRequestStatusParams: Schema.Schema<GetRequestStatusParams, GetRequestStatusParamsEncoded, never> = Schema.Struct({
  requestId: Schema.String,
});

export interface GetRequestStatusResponse {
  readonly data: Inline336;
}
export interface GetRequestStatusResponseEncoded {
  readonly data: Inline336Encoded;
}
export const GetRequestStatusResponse: Schema.Schema<GetRequestStatusResponse, GetRequestStatusResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline336),
});

export interface GetSDBudgetRecommendationsParams {
  readonly campaignIds: ReadonlyArray<string>;
}
export interface GetSDBudgetRecommendationsParamsEncoded {
  readonly campaignIds: ReadonlyArray<string>;
}
export const GetSDBudgetRecommendationsParams: Schema.Schema<GetSDBudgetRecommendationsParams, GetSDBudgetRecommendationsParamsEncoded, never> = Schema.Struct({
  campaignIds: Schema.Array(Schema.String),
});

export interface GetSDBudgetRecommendationsResponse {

}
export interface GetSDBudgetRecommendationsResponseEncoded {

}
export const GetSDBudgetRecommendationsResponse: Schema.Schema<GetSDBudgetRecommendationsResponse, GetSDBudgetRecommendationsResponseEncoded, never> = Schema.Struct({

});

export interface GetSDBudgetRuleResponse {
  readonly budgetRule?: Inline29;
}
export interface GetSDBudgetRuleResponseEncoded {
  readonly budgetRule?: Inline29Encoded;
}
export const GetSDBudgetRuleResponse: Schema.Schema<GetSDBudgetRuleResponse, GetSDBudgetRuleResponseEncoded, never> = Schema.Struct({
  budgetRule: Schema.optional(Schema.suspend(() => Inline29)),
});

export interface GetSDBudgetRulesForAdvertiserParams {
  readonly nextToken?: string;
  readonly pageSize: number;
}
export interface GetSDBudgetRulesForAdvertiserParamsEncoded {
  readonly nextToken?: string;
  readonly pageSize: number;
}
export const GetSDBudgetRulesForAdvertiserParams: Schema.Schema<GetSDBudgetRulesForAdvertiserParams, GetSDBudgetRulesForAdvertiserParamsEncoded, never> = Schema.Struct({
  nextToken: Schema.optional(Schema.String),
  pageSize: Schema.Number,
});

export interface GetSDBudgetRulesForAdvertiserResponse {
  readonly budgetRulesForAdvertiserResponse?: ReadonlyArray<Inline35>;
  readonly nextToken?: string;
}
export interface GetSDBudgetRulesForAdvertiserResponseEncoded {
  readonly budgetRulesForAdvertiserResponse?: ReadonlyArray<Inline35Encoded>;
  readonly nextToken?: string;
}
export const GetSDBudgetRulesForAdvertiserResponse: Schema.Schema<GetSDBudgetRulesForAdvertiserResponse, GetSDBudgetRulesForAdvertiserResponseEncoded, never> = Schema.Struct({
  budgetRulesForAdvertiserResponse: Schema.optional(Schema.Array(Schema.suspend(() => Inline35))),
  nextToken: Schema.optional(Schema.String),
});

export interface GetSnapshotByIdParams {
  readonly snapshotId: string;
}
export interface GetSnapshotByIdParamsEncoded {
  readonly snapshotId: string;
}
export const GetSnapshotByIdParams: Schema.Schema<GetSnapshotByIdParams, GetSnapshotByIdParamsEncoded, never> = Schema.Struct({
  snapshotId: Schema.String,
});

export interface GetSnapshotByIdResponse {
  readonly data: Inline408;
}
export interface GetSnapshotByIdResponseEncoded {
  readonly data: Inline408Encoded;
}
export const GetSnapshotByIdResponse: Schema.Schema<GetSnapshotByIdResponse, GetSnapshotByIdResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline408),
});

export interface GetTargetBidRecommendationsParams {
  readonly products?: ReadonlyArray<Inline413>;
  readonly targetingClauses: ReadonlyArray<Inline414>;
}
export interface GetTargetBidRecommendationsParamsEncoded {
  readonly products?: ReadonlyArray<Inline413Encoded>;
  readonly targetingClauses: ReadonlyArray<Inline414Encoded>;
}
export const GetTargetBidRecommendationsParams: Schema.Schema<GetTargetBidRecommendationsParams, GetTargetBidRecommendationsParamsEncoded, never> = Schema.Struct({
  products: Schema.optional(Schema.Array(Schema.suspend(() => Inline413))),
  targetingClauses: Schema.Array(Schema.suspend(() => Inline414)),
});

export interface GetTargetBidRecommendationsResponse {

}
export interface GetTargetBidRecommendationsResponseEncoded {

}
export const GetTargetBidRecommendationsResponse: Schema.Schema<GetTargetBidRecommendationsResponse, GetTargetBidRecommendationsResponseEncoded, never> = Schema.Struct({

});

export interface GetTargetRecommendationsParams {
  readonly locale?: string;
  readonly products: ReadonlyArray<Inline421>;
  readonly tactic: string;
  readonly typeFilter: ReadonlyArray<string>;
}
export interface GetTargetRecommendationsParamsEncoded {
  readonly locale?: string;
  readonly products: ReadonlyArray<Inline421Encoded>;
  readonly tactic: string;
  readonly typeFilter: ReadonlyArray<string>;
}
export const GetTargetRecommendationsParams: Schema.Schema<GetTargetRecommendationsParams, GetTargetRecommendationsParamsEncoded, never> = Schema.Struct({
  locale: Schema.optional(Schema.String),
  products: Schema.Array(Schema.suspend(() => Inline421)),
  tactic: Schema.String,
  typeFilter: Schema.Array(Schema.String),
});

export interface GetTargetRecommendationsResponse {
  readonly data: Inline423;
}
export interface GetTargetRecommendationsResponseEncoded {
  readonly data: Inline423Encoded;
}
export const GetTargetRecommendationsResponse: Schema.Schema<GetTargetRecommendationsResponse, GetTargetRecommendationsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline423),
});

export interface Inline10 {
  readonly budget?: number;
  readonly budgetUsagePercent?: number;
  readonly campaignId?: string;
  readonly index?: number;
  readonly usageUpdatedTimestamp?: string;
}
export interface Inline10Encoded {
  readonly budget?: number;
  readonly budgetUsagePercent?: number;
  readonly campaignId?: string;
  readonly index?: number;
  readonly usageUpdatedTimestamp?: string;
}
export const Inline10: Schema.Schema<Inline10, Inline10Encoded, never> = Schema.Struct({
  budget: Schema.optional(Schema.Number),
  budgetUsagePercent: Schema.optional(Schema.Number),
  campaignId: Schema.optional(Schema.String),
  index: Schema.optional(Schema.Number),
  usageUpdatedTimestamp: Schema.optional(Schema.String),
});

export interface Inline100 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline100Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline100: Schema.Schema<Inline100, Inline100Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline101 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline101>;
  readonly type?: string;
}
export interface Inline101Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline101Encoded>;
  readonly type?: string;
}
export const Inline101: Schema.Schema<Inline101, Inline101Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline101))),
  type: Schema.optional(Schema.String),
});

export interface Inline104 {
  readonly rangeLower?: number;
  readonly rangeUpper?: number;
}
export interface Inline104Encoded {
  readonly rangeLower?: number;
  readonly rangeUpper?: number;
}
export const Inline104: Schema.Schema<Inline104, Inline104Encoded, never> = Schema.Struct({
  rangeLower: Schema.optional(Schema.Number),
  rangeUpper: Schema.optional(Schema.Number),
});

export interface Inline106 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline106;
}
export interface Inline106Encoded {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline106Encoded;
}
export const Inline106: Schema.Schema<Inline106, Inline106Encoded, never> = Schema.Struct({
  category: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  path: Schema.optional(Schema.Array(Schema.String)),
  rank: Schema.optional(Schema.Number),
  targetableAsinCountRange: Schema.optional(Schema.suspend(() => Inline106)),
});

export interface Inline108 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline108;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}
export interface Inline108Encoded {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline108Encoded;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}
export const Inline108: Schema.Schema<Inline108, Inline108Encoded, never> = Schema.Struct({
  category: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  path: Schema.optional(Schema.Array(Schema.String)),
  rank: Schema.optional(Schema.Number),
  targetableAsinCountRange: Schema.optional(Schema.suspend(() => Inline108)),
  translatedName: Schema.optional(Schema.String),
  translatedPath: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline110 {
  readonly rangeLower?: number;
  readonly rangeUpper?: number;
}
export interface Inline110Encoded {
  readonly rangeLower?: number;
  readonly rangeUpper?: number;
}
export const Inline110: Schema.Schema<Inline110, Inline110Encoded, never> = Schema.Struct({
  rangeLower: Schema.optional(Schema.Number),
  rangeUpper: Schema.optional(Schema.Number),
});

export interface Inline119 {
  readonly campaignId: string;
  readonly campaignName: string;
  readonly ruleStatus: string;
}
export interface Inline119Encoded {
  readonly campaignId: string;
  readonly campaignName: string;
  readonly ruleStatus: string;
}
export const Inline119: Schema.Schema<Inline119, Inline119Encoded, never> = Schema.Struct({
  campaignId: Schema.String,
  campaignName: Schema.String,
  ruleStatus: Schema.String,
});

export interface Inline128 {
  readonly headline?: string;
  readonly headlineId?: string;
}
export interface Inline128Encoded {
  readonly headline?: string;
  readonly headlineId?: string;
}
export const Inline128: Schema.Schema<Inline128, Inline128Encoded, never> = Schema.Struct({
  headline: Schema.optional(Schema.String),
  headlineId: Schema.optional(Schema.String),
});

export interface Inline133 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline133;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export interface Inline133Encoded {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline133Encoded;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export const Inline133: Schema.Schema<Inline133, Inline133Encoded, never> = Schema.Struct({
  createdDate: Schema.optional(Schema.Number),
  lastUpdatedDate: Schema.optional(Schema.Number),
  ruleDetails: Schema.optional(Schema.suspend(() => Inline133)),
  ruleId: Schema.String,
  ruleState: Schema.optional(Schema.String),
  ruleStatus: Schema.optional(Schema.String),
});

export interface Inline134 {
  readonly dateRangeTypeRuleDuration?: Inline134;
  readonly eventTypeRuleDuration?: Inline135;
}
export interface Inline134Encoded {
  readonly dateRangeTypeRuleDuration?: Inline134Encoded;
  readonly eventTypeRuleDuration?: Inline135Encoded;
}
export const Inline134: Schema.Schema<Inline134, Inline134Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline134)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline135)),
});

export interface Inline135 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline135Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline135: Schema.Schema<Inline135, Inline135Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline136 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline136Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline136: Schema.Schema<Inline136, Inline136Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline137 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline137>;
  readonly type?: string;
}
export interface Inline137Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline137Encoded>;
  readonly type?: string;
}
export const Inline137: Schema.Schema<Inline137, Inline137Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline137))),
  type: Schema.optional(Schema.String),
});

export interface Inline141 {
  readonly asin?: string;
  readonly rank?: number;
}
export interface Inline141Encoded {
  readonly asin?: string;
  readonly rank?: number;
}
export const Inline141: Schema.Schema<Inline141, Inline141Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface Inline143 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export interface Inline143Encoded {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export const Inline143: Schema.Schema<Inline143, Inline143Encoded, never> = Schema.Struct({
  advertisedAsins: Schema.optional(Schema.Array(Schema.String)),
  asin: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface Inline146 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export interface Inline146Encoded {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export const Inline146: Schema.Schema<Inline146, Inline146Encoded, never> = Schema.Struct({
  advertisedAsins: Schema.optional(Schema.Array(Schema.String)),
  asin: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface Inline148 {
  readonly type: string;
}
export interface Inline148Encoded {
  readonly type: string;
}
export const Inline148: Schema.Schema<Inline148, Inline148Encoded, never> = Schema.Struct({
  type: Schema.String,
});

export interface Inline149 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export interface Inline149Encoded {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export const Inline149: Schema.Schema<Inline149, Inline149Encoded, never> = Schema.Struct({
  advertisedAsins: Schema.optional(Schema.Array(Schema.String)),
  asin: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface Inline15 {
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}
export interface Inline15Encoded {
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}
export const Inline15: Schema.Schema<Inline15, Inline15Encoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
  ruleId: Schema.optional(Schema.String),
});

export interface Inline151 {
  readonly type: string;
}
export interface Inline151Encoded {
  readonly type: string;
}
export const Inline151: Schema.Schema<Inline151, Inline151Encoded, never> = Schema.Struct({
  type: Schema.String,
});

export interface Inline154 {
  readonly code?: string;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline154>;
}
export interface Inline154Encoded {
  readonly code?: string;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline154Encoded>;
}
export const Inline154: Schema.Schema<Inline154, Inline154Encoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  recommendations: Schema.optional(Schema.Array(Schema.suspend(() => Inline154))),
});

export interface Inline155 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
}
export interface Inline155Encoded {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
}
export const Inline155: Schema.Schema<Inline155, Inline155Encoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
});

export interface Inline157 {
  readonly code?: string;
  readonly expression?: ReadonlyArray<Inline157>;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline158>;
}
export interface Inline157Encoded {
  readonly code?: string;
  readonly expression?: ReadonlyArray<Inline157Encoded>;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline158Encoded>;
}
export const Inline157: Schema.Schema<Inline157, Inline157Encoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  expression: Schema.optional(Schema.Array(Schema.suspend(() => Inline157))),
  name: Schema.optional(Schema.String),
  recommendations: Schema.optional(Schema.Array(Schema.suspend(() => Inline158))),
});

export interface Inline158 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export interface Inline158Encoded {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export const Inline158: Schema.Schema<Inline158, Inline158Encoded, never> = Schema.Struct({
  advertisedAsins: Schema.optional(Schema.Array(Schema.String)),
  asin: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface Inline159 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline159>;
  readonly name?: string;
}
export interface Inline159Encoded {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline159Encoded>;
  readonly name?: string;
}
export const Inline159: Schema.Schema<Inline159, Inline159Encoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  expression: Schema.optional(Schema.Array(Schema.suspend(() => Inline159))),
  name: Schema.optional(Schema.String),
});

export interface Inline169 {
  readonly type: string;
  readonly value?: string;
}
export interface Inline169Encoded {
  readonly type: string;
  readonly value?: string;
}
export const Inline169: Schema.Schema<Inline169, Inline169Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.optional(Schema.String),
});

export interface Inline17 {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}
export interface Inline17Encoded {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}
export const Inline17: Schema.Schema<Inline17, Inline17Encoded, never> = Schema.Struct({
  associatedCampaignIds: Schema.optional(Schema.Array(Schema.String)),
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
  ruleId: Schema.optional(Schema.String),
});

export interface Inline170 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline170>;
}
export interface Inline170Encoded {
  readonly type: string;
  readonly value: ReadonlyArray<Inline170Encoded>;
}
export const Inline170: Schema.Schema<Inline170, Inline170Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.Array(Schema.suspend(() => Inline170)),
});

export interface Inline172 {
  readonly type: string;
  readonly value?: string;
}
export interface Inline172Encoded {
  readonly type: string;
  readonly value?: string;
}
export const Inline172: Schema.Schema<Inline172, Inline172Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.optional(Schema.String),
});

export interface Inline173 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline173>;
}
export interface Inline173Encoded {
  readonly type: string;
  readonly value: ReadonlyArray<Inline173Encoded>;
}
export const Inline173: Schema.Schema<Inline173, Inline173Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.Array(Schema.suspend(() => Inline173)),
});

export interface Inline174 {
  readonly type: string;
  readonly value: string;
}
export interface Inline174Encoded {
  readonly type: string;
  readonly value: string;
}
export const Inline174: Schema.Schema<Inline174, Inline174Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.String,
});

export interface Inline176 {
  readonly asin: string;
}
export interface Inline176Encoded {
  readonly asin: string;
}
export const Inline176: Schema.Schema<Inline176, Inline176Encoded, never> = Schema.Struct({
  asin: Schema.String,
});

export interface Inline177 {
  readonly targetingClause: Inline177;
}
export interface Inline177Encoded {
  readonly targetingClause: Inline177Encoded;
}
export const Inline177: Schema.Schema<Inline177, Inline177Encoded, never> = Schema.Struct({
  targetingClause: Schema.suspend(() => Inline177),
});

export interface Inline178 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline178>;
}
export interface Inline178Encoded {
  readonly type: string;
  readonly value: ReadonlyArray<Inline178Encoded>;
}
export const Inline178: Schema.Schema<Inline178, Inline178Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.Array(Schema.suspend(() => Inline178)),
});

export interface Inline180 {
  readonly asin: string;
}
export interface Inline180Encoded {
  readonly asin: string;
}
export const Inline180: Schema.Schema<Inline180, Inline180Encoded, never> = Schema.Struct({
  asin: Schema.String,
});

export interface Inline181 {
  readonly targetingClause: Inline181;
}
export interface Inline181Encoded {
  readonly targetingClause: Inline181Encoded;
}
export const Inline181: Schema.Schema<Inline181, Inline181Encoded, never> = Schema.Struct({
  targetingClause: Schema.suspend(() => Inline181),
});

export interface Inline182 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline182>;
}
export interface Inline182Encoded {
  readonly type: string;
  readonly value: ReadonlyArray<Inline182Encoded>;
}
export const Inline182: Schema.Schema<Inline182, Inline182Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.Array(Schema.suspend(() => Inline182)),
});

export interface Inline184 {
  readonly asin: string;
}
export interface Inline184Encoded {
  readonly asin: string;
}
export const Inline184: Schema.Schema<Inline184, Inline184Encoded, never> = Schema.Struct({
  asin: Schema.String,
});

export interface Inline185 {
  readonly targetingClause: Inline185;
}
export interface Inline185Encoded {
  readonly targetingClause: Inline185Encoded;
}
export const Inline185: Schema.Schema<Inline185, Inline185Encoded, never> = Schema.Struct({
  targetingClause: Schema.suspend(() => Inline185),
});

export interface Inline186 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline186>;
}
export interface Inline186Encoded {
  readonly type: string;
  readonly value: ReadonlyArray<Inline186Encoded>;
}
export const Inline186: Schema.Schema<Inline186, Inline186Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.Array(Schema.suspend(() => Inline186)),
});

export interface Inline188 {
  readonly asin: string;
}
export interface Inline188Encoded {
  readonly asin: string;
}
export const Inline188: Schema.Schema<Inline188, Inline188Encoded, never> = Schema.Struct({
  asin: Schema.String,
});

export interface Inline189 {
  readonly targetingClause: Inline189;
}
export interface Inline189Encoded {
  readonly targetingClause: Inline189Encoded;
}
export const Inline189: Schema.Schema<Inline189, Inline189Encoded, never> = Schema.Struct({
  targetingClause: Schema.suspend(() => Inline189),
});

export interface Inline19 {
  readonly budgetIncreaseBy?: Inline19;
  readonly duration?: Inline20;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline22;
  readonly recurrence?: Inline23;
  readonly ruleType?: string;
}
export interface Inline19Encoded {
  readonly budgetIncreaseBy?: Inline19Encoded;
  readonly duration?: Inline20Encoded;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline22Encoded;
  readonly recurrence?: Inline23Encoded;
  readonly ruleType?: string;
}
export const Inline19: Schema.Schema<Inline19, Inline19Encoded, never> = Schema.Struct({
  budgetIncreaseBy: Schema.optional(Schema.suspend(() => Inline19)),
  duration: Schema.optional(Schema.suspend(() => Inline20)),
  name: Schema.optional(Schema.String),
  performanceMeasureCondition: Schema.optional(Schema.suspend(() => Inline22)),
  recurrence: Schema.optional(Schema.suspend(() => Inline23)),
  ruleType: Schema.optional(Schema.String),
});

export interface Inline190 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline190>;
}
export interface Inline190Encoded {
  readonly type: string;
  readonly value: ReadonlyArray<Inline190Encoded>;
}
export const Inline190: Schema.Schema<Inline190, Inline190Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.Array(Schema.suspend(() => Inline190)),
});

export interface Inline191 {
  readonly type: string;
  readonly value: string;
}
export interface Inline191Encoded {
  readonly type: string;
  readonly value: string;
}
export const Inline191: Schema.Schema<Inline191, Inline191Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.String,
});

export interface Inline195 {
  readonly code: string;
  readonly rangeLower?: number;
  readonly rangeUpper?: number;
  readonly recommended?: number;
}
export interface Inline195Encoded {
  readonly code: string;
  readonly rangeLower?: number;
  readonly rangeUpper?: number;
  readonly recommended?: number;
}
export const Inline195: Schema.Schema<Inline195, Inline195Encoded, never> = Schema.Struct({
  code: Schema.String,
  rangeLower: Schema.optional(Schema.Number),
  rangeUpper: Schema.optional(Schema.Number),
  recommended: Schema.optional(Schema.Number),
});

export interface Inline196 {
  readonly code: string;
  readonly details: string;
}
export interface Inline196Encoded {
  readonly code: string;
  readonly details: string;
}
export const Inline196: Schema.Schema<Inline196, Inline196Encoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

export interface Inline198 {
  readonly code: string;
  readonly rangeLower?: number;
  readonly rangeUpper?: number;
  readonly recommended?: number;
}
export interface Inline198Encoded {
  readonly code: string;
  readonly rangeLower?: number;
  readonly rangeUpper?: number;
  readonly recommended?: number;
}
export const Inline198: Schema.Schema<Inline198, Inline198Encoded, never> = Schema.Struct({
  code: Schema.String,
  rangeLower: Schema.optional(Schema.Number),
  rangeUpper: Schema.optional(Schema.Number),
  recommended: Schema.optional(Schema.Number),
});

export interface Inline199 {
  readonly code: string;
  readonly details: string;
}
export interface Inline199Encoded {
  readonly code: string;
  readonly details: string;
}
export const Inline199: Schema.Schema<Inline199, Inline199Encoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

export interface Inline20 {
  readonly dateRangeTypeRuleDuration?: Inline20;
  readonly eventTypeRuleDuration?: Inline21;
}
export interface Inline20Encoded {
  readonly dateRangeTypeRuleDuration?: Inline20Encoded;
  readonly eventTypeRuleDuration?: Inline21Encoded;
}
export const Inline20: Schema.Schema<Inline20, Inline20Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline20)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline21)),
});

export interface Inline201 {
  readonly type: string;
  readonly value?: string;
}
export interface Inline201Encoded {
  readonly type: string;
  readonly value?: string;
}
export const Inline201: Schema.Schema<Inline201, Inline201Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.optional(Schema.String),
});

export interface Inline202 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline202>;
}
export interface Inline202Encoded {
  readonly type: string;
  readonly value: ReadonlyArray<Inline202Encoded>;
}
export const Inline202: Schema.Schema<Inline202, Inline202Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.Array(Schema.suspend(() => Inline202)),
});

export interface Inline204 {
  readonly type: string;
  readonly value?: string;
}
export interface Inline204Encoded {
  readonly type: string;
  readonly value?: string;
}
export const Inline204: Schema.Schema<Inline204, Inline204Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.optional(Schema.String),
});

export interface Inline205 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline205>;
}
export interface Inline205Encoded {
  readonly type: string;
  readonly value: ReadonlyArray<Inline205Encoded>;
}
export const Inline205: Schema.Schema<Inline205, Inline205Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.Array(Schema.suspend(() => Inline205)),
});

export interface Inline206 {
  readonly type: string;
  readonly value: string;
}
export interface Inline206Encoded {
  readonly type: string;
  readonly value: string;
}
export const Inline206: Schema.Schema<Inline206, Inline206Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.String,
});

export interface Inline208 {
  readonly type: string;
  readonly value?: string;
}
export interface Inline208Encoded {
  readonly type: string;
  readonly value?: string;
}
export const Inline208: Schema.Schema<Inline208, Inline208Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.optional(Schema.String),
});

export interface Inline209 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline209>;
}
export interface Inline209Encoded {
  readonly type: string;
  readonly value: ReadonlyArray<Inline209Encoded>;
}
export const Inline209: Schema.Schema<Inline209, Inline209Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.Array(Schema.suspend(() => Inline209)),
});

export interface Inline21 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline21Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline21: Schema.Schema<Inline21, Inline21Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline211 {
  readonly type: string;
  readonly value?: string;
}
export interface Inline211Encoded {
  readonly type: string;
  readonly value?: string;
}
export const Inline211: Schema.Schema<Inline211, Inline211Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.optional(Schema.String),
});

export interface Inline212 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline212>;
}
export interface Inline212Encoded {
  readonly type: string;
  readonly value: ReadonlyArray<Inline212Encoded>;
}
export const Inline212: Schema.Schema<Inline212, Inline212Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.Array(Schema.suspend(() => Inline212)),
});

export interface Inline213 {
  readonly type: string;
  readonly value: string;
}
export interface Inline213Encoded {
  readonly type: string;
  readonly value: string;
}
export const Inline213: Schema.Schema<Inline213, Inline213Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.String,
});

export interface Inline216 {
  readonly type: string;
  readonly value?: string;
}
export interface Inline216Encoded {
  readonly type: string;
  readonly value?: string;
}
export const Inline216: Schema.Schema<Inline216, Inline216Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.optional(Schema.String),
});

export interface Inline219 {
  readonly asin?: string;
  readonly rank?: number;
}
export interface Inline219Encoded {
  readonly asin?: string;
  readonly rank?: number;
}
export const Inline219: Schema.Schema<Inline219, Inline219Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface Inline22 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline22Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline22: Schema.Schema<Inline22, Inline22Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline222 {
  readonly type: string;
}
export interface Inline222Encoded {
  readonly type: string;
}
export const Inline222: Schema.Schema<Inline222, Inline222Encoded, never> = Schema.Struct({
  type: Schema.String,
});

export interface Inline224 {
  readonly asin: string;
}
export interface Inline224Encoded {
  readonly asin: string;
}
export const Inline224: Schema.Schema<Inline224, Inline224Encoded, never> = Schema.Struct({
  asin: Schema.String,
});

export interface Inline226 {
  readonly asin?: string;
  readonly landingPageType?: string;
  readonly landingPageURL?: string;
}
export interface Inline226Encoded {
  readonly asin?: string;
  readonly landingPageType?: string;
  readonly landingPageURL?: string;
}
export const Inline226: Schema.Schema<Inline226, Inline226Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  landingPageType: Schema.optional(Schema.String),
  landingPageURL: Schema.optional(Schema.String),
});

export interface Inline228 {
  readonly asin: string;
}
export interface Inline228Encoded {
  readonly asin: string;
}
export const Inline228: Schema.Schema<Inline228, Inline228Encoded, never> = Schema.Struct({
  asin: Schema.String,
});

export interface Inline23 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline23>;
  readonly type?: string;
}
export interface Inline23Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline23Encoded>;
  readonly type?: string;
}
export const Inline23: Schema.Schema<Inline23, Inline23Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline23))),
  type: Schema.optional(Schema.String),
});

export interface Inline230 {
  readonly asin: string;
}
export interface Inline230Encoded {
  readonly asin: string;
}
export const Inline230: Schema.Schema<Inline230, Inline230Encoded, never> = Schema.Struct({
  asin: Schema.String,
});

export interface Inline232 {
  readonly asin: string;
}
export interface Inline232Encoded {
  readonly asin: string;
}
export const Inline232: Schema.Schema<Inline232, Inline232Encoded, never> = Schema.Struct({
  asin: Schema.String,
});

export interface Inline233 {
  readonly product?: ReadonlyArray<Inline233>;
}
export interface Inline233Encoded {
  readonly product?: ReadonlyArray<Inline233Encoded>;
}
export const Inline233: Schema.Schema<Inline233, Inline233Encoded, never> = Schema.Struct({
  product: Schema.optional(Schema.Array(Schema.suspend(() => Inline233))),
});

export interface Inline235 {
  readonly asin: string;
}
export interface Inline235Encoded {
  readonly asin: string;
}
export const Inline235: Schema.Schema<Inline235, Inline235Encoded, never> = Schema.Struct({
  asin: Schema.String,
});

export interface Inline236 {
  readonly product?: ReadonlyArray<Inline236>;
}
export interface Inline236Encoded {
  readonly product?: ReadonlyArray<Inline236Encoded>;
}
export const Inline236: Schema.Schema<Inline236, Inline236Encoded, never> = Schema.Struct({
  product: Schema.optional(Schema.Array(Schema.suspend(() => Inline236))),
});

export interface Inline238 {
  readonly asin: string;
}
export interface Inline238Encoded {
  readonly asin: string;
}
export const Inline238: Schema.Schema<Inline238, Inline238Encoded, never> = Schema.Struct({
  asin: Schema.String,
});

export interface Inline239 {
  readonly product?: ReadonlyArray<Inline239>;
}
export interface Inline239Encoded {
  readonly product?: ReadonlyArray<Inline239Encoded>;
}
export const Inline239: Schema.Schema<Inline239, Inline239Encoded, never> = Schema.Struct({
  product: Schema.optional(Schema.Array(Schema.suspend(() => Inline239))),
});

export interface Inline241 {
  readonly type?: string;
  readonly value?: string;
}
export interface Inline241Encoded {
  readonly type?: string;
  readonly value?: string;
}
export const Inline241: Schema.Schema<Inline241, Inline241Encoded, never> = Schema.Struct({
  type: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});

export interface Inline242 {
  readonly asin?: string;
  readonly landingPageType?: string;
  readonly landingPageURL?: string;
}
export interface Inline242Encoded {
  readonly asin?: string;
  readonly landingPageType?: string;
  readonly landingPageURL?: string;
}
export const Inline242: Schema.Schema<Inline242, Inline242Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  landingPageType: Schema.optional(Schema.String),
  landingPageURL: Schema.optional(Schema.String),
});

export interface Inline243 {
  readonly product?: ReadonlyArray<Inline243>;
}
export interface Inline243Encoded {
  readonly product?: ReadonlyArray<Inline243Encoded>;
}
export const Inline243: Schema.Schema<Inline243, Inline243Encoded, never> = Schema.Struct({
  product: Schema.optional(Schema.Array(Schema.suspend(() => Inline243))),
});

export interface Inline245 {
  readonly products?: ReadonlyArray<Inline245>;
}
export interface Inline245Encoded {
  readonly products?: ReadonlyArray<Inline245Encoded>;
}
export const Inline245: Schema.Schema<Inline245, Inline245Encoded, never> = Schema.Struct({
  products: Schema.optional(Schema.Array(Schema.suspend(() => Inline245))),
});

export interface Inline247 {
  readonly products?: ReadonlyArray<Inline247>;
  readonly categories?: ReadonlyArray<Inline248>;
}
export interface Inline247Encoded {
  readonly products?: ReadonlyArray<Inline247Encoded>;
  readonly categories?: ReadonlyArray<Inline248Encoded>;
}
export const Inline247: Schema.Schema<Inline247, Inline247Encoded, never> = Schema.Struct({
  products: Schema.optional(Schema.Array(Schema.suspend(() => Inline247))),
  categories: Schema.optional(Schema.Array(Schema.suspend(() => Inline248))),
});

export interface Inline248 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline248;
}
export interface Inline248Encoded {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline248Encoded;
}
export const Inline248: Schema.Schema<Inline248, Inline248Encoded, never> = Schema.Struct({
  category: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  path: Schema.optional(Schema.Array(Schema.String)),
  rank: Schema.optional(Schema.Number),
  targetableAsinCountRange: Schema.optional(Schema.suspend(() => Inline248)),
});

export interface Inline250 {
  readonly products?: ReadonlyArray<Inline250>;
  readonly categories?: ReadonlyArray<Inline251>;
  readonly themes?: Inline252;
}
export interface Inline250Encoded {
  readonly products?: ReadonlyArray<Inline250Encoded>;
  readonly categories?: ReadonlyArray<Inline251Encoded>;
  readonly themes?: Inline252Encoded;
}
export const Inline250: Schema.Schema<Inline250, Inline250Encoded, never> = Schema.Struct({
  products: Schema.optional(Schema.Array(Schema.suspend(() => Inline250))),
  categories: Schema.optional(Schema.Array(Schema.suspend(() => Inline251))),
  themes: Schema.optional(Schema.suspend(() => Inline252)),
});

export interface Inline251 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline251;
}
export interface Inline251Encoded {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline251Encoded;
}
export const Inline251: Schema.Schema<Inline251, Inline251Encoded, never> = Schema.Struct({
  category: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  path: Schema.optional(Schema.Array(Schema.String)),
  rank: Schema.optional(Schema.Number),
  targetableAsinCountRange: Schema.optional(Schema.suspend(() => Inline251)),
});

export interface Inline252 {
  readonly products?: ReadonlyArray<Inline252 | Inline253>;
}
export interface Inline252Encoded {
  readonly products?: ReadonlyArray<Inline252Encoded | Inline253Encoded>;
}
export const Inline252: Schema.Schema<Inline252, Inline252Encoded, never> = Schema.Struct({
  products: Schema.optional(Schema.Array(Schema.Union(Schema.suspend(() => Inline252), Schema.suspend(() => Inline253)))),
});

export interface Inline253 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
}
export interface Inline253Encoded {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
}
export const Inline253: Schema.Schema<Inline253, Inline253Encoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
});

export interface Inline255 {
  readonly products?: ReadonlyArray<Inline255>;
  readonly categories?: ReadonlyArray<Inline256>;
  readonly audiences?: ReadonlyArray<Inline257>;
  readonly themes?: Inline258;
}
export interface Inline255Encoded {
  readonly products?: ReadonlyArray<Inline255Encoded>;
  readonly categories?: ReadonlyArray<Inline256Encoded>;
  readonly audiences?: ReadonlyArray<Inline257Encoded>;
  readonly themes?: Inline258Encoded;
}
export const Inline255: Schema.Schema<Inline255, Inline255Encoded, never> = Schema.Struct({
  products: Schema.optional(Schema.Array(Schema.suspend(() => Inline255))),
  categories: Schema.optional(Schema.Array(Schema.suspend(() => Inline256))),
  audiences: Schema.optional(Schema.Array(Schema.suspend(() => Inline257))),
  themes: Schema.optional(Schema.suspend(() => Inline258)),
});

export interface Inline256 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline256;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}
export interface Inline256Encoded {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline256Encoded;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}
export const Inline256: Schema.Schema<Inline256, Inline256Encoded, never> = Schema.Struct({
  category: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  path: Schema.optional(Schema.Array(Schema.String)),
  rank: Schema.optional(Schema.Number),
  targetableAsinCountRange: Schema.optional(Schema.suspend(() => Inline256)),
  translatedName: Schema.optional(Schema.String),
  translatedPath: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline257 {
  readonly audiences?: ReadonlyArray<Inline257>;
  readonly category?: string;
}
export interface Inline257Encoded {
  readonly audiences?: ReadonlyArray<Inline257Encoded>;
  readonly category?: string;
}
export const Inline257: Schema.Schema<Inline257, Inline257Encoded, never> = Schema.Struct({
  audiences: Schema.optional(Schema.Array(Schema.suspend(() => Inline257))),
  category: Schema.optional(Schema.String),
});

export interface Inline258 {
  readonly products?: ReadonlyArray<Inline258 | Inline259>;
}
export interface Inline258Encoded {
  readonly products?: ReadonlyArray<Inline258Encoded | Inline259Encoded>;
}
export const Inline258: Schema.Schema<Inline258, Inline258Encoded, never> = Schema.Struct({
  products: Schema.optional(Schema.Array(Schema.Union(Schema.suspend(() => Inline258), Schema.suspend(() => Inline259)))),
});

export interface Inline259 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
}
export interface Inline259Encoded {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
}
export const Inline259: Schema.Schema<Inline259, Inline259Encoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
});

export interface Inline261 {
  readonly audiences?: ReadonlyArray<Inline261>;
  readonly categories?: ReadonlyArray<Inline262>;
  readonly products?: ReadonlyArray<Inline263>;
  readonly themes?: Inline264;
}
export interface Inline261Encoded {
  readonly audiences?: ReadonlyArray<Inline261Encoded>;
  readonly categories?: ReadonlyArray<Inline262Encoded>;
  readonly products?: ReadonlyArray<Inline263Encoded>;
  readonly themes?: Inline264Encoded;
}
export const Inline261: Schema.Schema<Inline261, Inline261Encoded, never> = Schema.Struct({
  audiences: Schema.optional(Schema.Array(Schema.suspend(() => Inline261))),
  categories: Schema.optional(Schema.Array(Schema.suspend(() => Inline262))),
  products: Schema.optional(Schema.Array(Schema.suspend(() => Inline263))),
  themes: Schema.optional(Schema.suspend(() => Inline264)),
});

export interface Inline262 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline262;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}
export interface Inline262Encoded {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline262Encoded;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}
export const Inline262: Schema.Schema<Inline262, Inline262Encoded, never> = Schema.Struct({
  category: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  path: Schema.optional(Schema.Array(Schema.String)),
  rank: Schema.optional(Schema.Number),
  targetableAsinCountRange: Schema.optional(Schema.suspend(() => Inline262)),
  translatedName: Schema.optional(Schema.String),
  translatedPath: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline263 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export interface Inline263Encoded {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export const Inline263: Schema.Schema<Inline263, Inline263Encoded, never> = Schema.Struct({
  advertisedAsins: Schema.optional(Schema.Array(Schema.String)),
  asin: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface Inline264 {
  readonly products?: ReadonlyArray<Inline264 | Inline266>;
}
export interface Inline264Encoded {
  readonly products?: ReadonlyArray<Inline264Encoded | Inline266Encoded>;
}
export const Inline264: Schema.Schema<Inline264, Inline264Encoded, never> = Schema.Struct({
  products: Schema.optional(Schema.Array(Schema.Union(Schema.suspend(() => Inline264), Schema.suspend(() => Inline266)))),
});

export interface Inline265 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export interface Inline265Encoded {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export const Inline265: Schema.Schema<Inline265, Inline265Encoded, never> = Schema.Struct({
  advertisedAsins: Schema.optional(Schema.Array(Schema.String)),
  asin: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface Inline266 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline266>;
  readonly name?: string;
}
export interface Inline266Encoded {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline266Encoded>;
  readonly name?: string;
}
export const Inline266: Schema.Schema<Inline266, Inline266Encoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  expression: Schema.optional(Schema.Array(Schema.suspend(() => Inline266))),
  name: Schema.optional(Schema.String),
});

export interface Inline268 {
  readonly audiences?: ReadonlyArray<Inline268>;
  readonly categories?: ReadonlyArray<Inline269>;
  readonly contentCategories?: ReadonlyArray<Inline270>;
  readonly products?: ReadonlyArray<Inline271>;
  readonly themes?: Inline272;
}
export interface Inline268Encoded {
  readonly audiences?: ReadonlyArray<Inline268Encoded>;
  readonly categories?: ReadonlyArray<Inline269Encoded>;
  readonly contentCategories?: ReadonlyArray<Inline270Encoded>;
  readonly products?: ReadonlyArray<Inline271Encoded>;
  readonly themes?: Inline272Encoded;
}
export const Inline268: Schema.Schema<Inline268, Inline268Encoded, never> = Schema.Struct({
  audiences: Schema.optional(Schema.Array(Schema.suspend(() => Inline268))),
  categories: Schema.optional(Schema.Array(Schema.suspend(() => Inline269))),
  contentCategories: Schema.optional(Schema.Array(Schema.suspend(() => Inline270))),
  products: Schema.optional(Schema.Array(Schema.suspend(() => Inline271))),
  themes: Schema.optional(Schema.suspend(() => Inline272)),
});

export interface Inline269 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline269;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}
export interface Inline269Encoded {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline269Encoded;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}
export const Inline269: Schema.Schema<Inline269, Inline269Encoded, never> = Schema.Struct({
  category: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  path: Schema.optional(Schema.Array(Schema.String)),
  rank: Schema.optional(Schema.Number),
  targetableAsinCountRange: Schema.optional(Schema.suspend(() => Inline269)),
  translatedName: Schema.optional(Schema.String),
  translatedPath: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline270 {
  readonly contentCategory?: string;
  readonly name?: string;
  readonly rank?: number;
}
export interface Inline270Encoded {
  readonly contentCategory?: string;
  readonly name?: string;
  readonly rank?: number;
}
export const Inline270: Schema.Schema<Inline270, Inline270Encoded, never> = Schema.Struct({
  contentCategory: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface Inline271 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export interface Inline271Encoded {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export const Inline271: Schema.Schema<Inline271, Inline271Encoded, never> = Schema.Struct({
  advertisedAsins: Schema.optional(Schema.Array(Schema.String)),
  asin: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface Inline272 {
  readonly products?: ReadonlyArray<Inline272 | Inline274>;
}
export interface Inline272Encoded {
  readonly products?: ReadonlyArray<Inline272Encoded | Inline274Encoded>;
}
export const Inline272: Schema.Schema<Inline272, Inline272Encoded, never> = Schema.Struct({
  products: Schema.optional(Schema.Array(Schema.Union(Schema.suspend(() => Inline272), Schema.suspend(() => Inline274)))),
});

export interface Inline273 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export interface Inline273Encoded {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export const Inline273: Schema.Schema<Inline273, Inline273Encoded, never> = Schema.Struct({
  advertisedAsins: Schema.optional(Schema.Array(Schema.String)),
  asin: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface Inline274 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline274>;
  readonly name?: string;
}
export interface Inline274Encoded {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline274Encoded>;
  readonly name?: string;
}
export const Inline274: Schema.Schema<Inline274, Inline274Encoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  expression: Schema.optional(Schema.Array(Schema.suspend(() => Inline274))),
  name: Schema.optional(Schema.String),
});

export interface Inline276 {
  readonly expression: ReadonlyArray<Inline276>;
  readonly name: string;
}
export interface Inline276Encoded {
  readonly expression: ReadonlyArray<Inline276Encoded>;
  readonly name: string;
}
export const Inline276: Schema.Schema<Inline276, Inline276Encoded, never> = Schema.Struct({
  expression: Schema.Array(Schema.suspend(() => Inline276)),
  name: Schema.String,
});

export interface Inline281 {
  readonly asin?: string;
  readonly rank?: number;
}
export interface Inline281Encoded {
  readonly asin?: string;
  readonly rank?: number;
}
export const Inline281: Schema.Schema<Inline281, Inline281Encoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface Inline282 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline282;
}
export interface Inline282Encoded {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline282Encoded;
}
export const Inline282: Schema.Schema<Inline282, Inline282Encoded, never> = Schema.Struct({
  category: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  path: Schema.optional(Schema.Array(Schema.String)),
  rank: Schema.optional(Schema.Number),
  targetableAsinCountRange: Schema.optional(Schema.suspend(() => Inline282)),
});

export interface Inline284 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export interface Inline284Encoded {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export const Inline284: Schema.Schema<Inline284, Inline284Encoded, never> = Schema.Struct({
  advertisedAsins: Schema.optional(Schema.Array(Schema.String)),
  asin: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface Inline285 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline285;
}
export interface Inline285Encoded {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline285Encoded;
}
export const Inline285: Schema.Schema<Inline285, Inline285Encoded, never> = Schema.Struct({
  category: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  path: Schema.optional(Schema.Array(Schema.String)),
  rank: Schema.optional(Schema.Number),
  targetableAsinCountRange: Schema.optional(Schema.suspend(() => Inline285)),
});

export interface Inline286 {
  readonly products?: ReadonlyArray<Inline286 | Inline287>;
}
export interface Inline286Encoded {
  readonly products?: ReadonlyArray<Inline286Encoded | Inline287Encoded>;
}
export const Inline286: Schema.Schema<Inline286, Inline286Encoded, never> = Schema.Struct({
  products: Schema.optional(Schema.Array(Schema.Union(Schema.suspend(() => Inline286), Schema.suspend(() => Inline287)))),
});

export interface Inline287 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
}
export interface Inline287Encoded {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
}
export const Inline287: Schema.Schema<Inline287, Inline287Encoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
});

export interface Inline289 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export interface Inline289Encoded {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export const Inline289: Schema.Schema<Inline289, Inline289Encoded, never> = Schema.Struct({
  advertisedAsins: Schema.optional(Schema.Array(Schema.String)),
  asin: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface Inline29 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline29;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export interface Inline29Encoded {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline29Encoded;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export const Inline29: Schema.Schema<Inline29, Inline29Encoded, never> = Schema.Struct({
  createdDate: Schema.optional(Schema.Number),
  lastUpdatedDate: Schema.optional(Schema.Number),
  ruleDetails: Schema.optional(Schema.suspend(() => Inline29)),
  ruleId: Schema.String,
  ruleState: Schema.optional(Schema.String),
  ruleStatus: Schema.optional(Schema.String),
});

export interface Inline290 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline290;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}
export interface Inline290Encoded {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline290Encoded;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}
export const Inline290: Schema.Schema<Inline290, Inline290Encoded, never> = Schema.Struct({
  category: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  path: Schema.optional(Schema.Array(Schema.String)),
  rank: Schema.optional(Schema.Number),
  targetableAsinCountRange: Schema.optional(Schema.suspend(() => Inline290)),
  translatedName: Schema.optional(Schema.String),
  translatedPath: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline291 {
  readonly audiences?: ReadonlyArray<Inline291>;
  readonly category?: string;
}
export interface Inline291Encoded {
  readonly audiences?: ReadonlyArray<Inline291Encoded>;
  readonly category?: string;
}
export const Inline291: Schema.Schema<Inline291, Inline291Encoded, never> = Schema.Struct({
  audiences: Schema.optional(Schema.Array(Schema.suspend(() => Inline291))),
  category: Schema.optional(Schema.String),
});

export interface Inline292 {
  readonly products?: ReadonlyArray<Inline292 | Inline293>;
}
export interface Inline292Encoded {
  readonly products?: ReadonlyArray<Inline292Encoded | Inline293Encoded>;
}
export const Inline292: Schema.Schema<Inline292, Inline292Encoded, never> = Schema.Struct({
  products: Schema.optional(Schema.Array(Schema.Union(Schema.suspend(() => Inline292), Schema.suspend(() => Inline293)))),
});

export interface Inline293 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
}
export interface Inline293Encoded {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
}
export const Inline293: Schema.Schema<Inline293, Inline293Encoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
});

export interface Inline295 {
  readonly audiences?: ReadonlyArray<Inline295>;
  readonly category?: string;
}
export interface Inline295Encoded {
  readonly audiences?: ReadonlyArray<Inline295Encoded>;
  readonly category?: string;
}
export const Inline295: Schema.Schema<Inline295, Inline295Encoded, never> = Schema.Struct({
  audiences: Schema.optional(Schema.Array(Schema.suspend(() => Inline295))),
  category: Schema.optional(Schema.String),
});

export interface Inline296 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline296;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}
export interface Inline296Encoded {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline296Encoded;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}
export const Inline296: Schema.Schema<Inline296, Inline296Encoded, never> = Schema.Struct({
  category: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  path: Schema.optional(Schema.Array(Schema.String)),
  rank: Schema.optional(Schema.Number),
  targetableAsinCountRange: Schema.optional(Schema.suspend(() => Inline296)),
  translatedName: Schema.optional(Schema.String),
  translatedPath: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline297 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export interface Inline297Encoded {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export const Inline297: Schema.Schema<Inline297, Inline297Encoded, never> = Schema.Struct({
  advertisedAsins: Schema.optional(Schema.Array(Schema.String)),
  asin: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface Inline298 {
  readonly products?: ReadonlyArray<Inline298 | Inline300>;
}
export interface Inline298Encoded {
  readonly products?: ReadonlyArray<Inline298Encoded | Inline300Encoded>;
}
export const Inline298: Schema.Schema<Inline298, Inline298Encoded, never> = Schema.Struct({
  products: Schema.optional(Schema.Array(Schema.Union(Schema.suspend(() => Inline298), Schema.suspend(() => Inline300)))),
});

export interface Inline299 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export interface Inline299Encoded {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export const Inline299: Schema.Schema<Inline299, Inline299Encoded, never> = Schema.Struct({
  advertisedAsins: Schema.optional(Schema.Array(Schema.String)),
  asin: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface Inline30 {
  readonly dateRangeTypeRuleDuration?: Inline30;
  readonly eventTypeRuleDuration?: Inline31;
}
export interface Inline30Encoded {
  readonly dateRangeTypeRuleDuration?: Inline30Encoded;
  readonly eventTypeRuleDuration?: Inline31Encoded;
}
export const Inline30: Schema.Schema<Inline30, Inline30Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline30)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline31)),
});

export interface Inline300 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline300>;
  readonly name?: string;
}
export interface Inline300Encoded {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline300Encoded>;
  readonly name?: string;
}
export const Inline300: Schema.Schema<Inline300, Inline300Encoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  expression: Schema.optional(Schema.Array(Schema.suspend(() => Inline300))),
  name: Schema.optional(Schema.String),
});

export interface Inline302 {
  readonly audiences?: ReadonlyArray<Inline302>;
  readonly category?: string;
}
export interface Inline302Encoded {
  readonly audiences?: ReadonlyArray<Inline302Encoded>;
  readonly category?: string;
}
export const Inline302: Schema.Schema<Inline302, Inline302Encoded, never> = Schema.Struct({
  audiences: Schema.optional(Schema.Array(Schema.suspend(() => Inline302))),
  category: Schema.optional(Schema.String),
});

export interface Inline303 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline303;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}
export interface Inline303Encoded {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline303Encoded;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}
export const Inline303: Schema.Schema<Inline303, Inline303Encoded, never> = Schema.Struct({
  category: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  path: Schema.optional(Schema.Array(Schema.String)),
  rank: Schema.optional(Schema.Number),
  targetableAsinCountRange: Schema.optional(Schema.suspend(() => Inline303)),
  translatedName: Schema.optional(Schema.String),
  translatedPath: Schema.optional(Schema.Array(Schema.String)),
});

export interface Inline304 {
  readonly contentCategory?: string;
  readonly name?: string;
  readonly rank?: number;
}
export interface Inline304Encoded {
  readonly contentCategory?: string;
  readonly name?: string;
  readonly rank?: number;
}
export const Inline304: Schema.Schema<Inline304, Inline304Encoded, never> = Schema.Struct({
  contentCategory: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface Inline305 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export interface Inline305Encoded {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export const Inline305: Schema.Schema<Inline305, Inline305Encoded, never> = Schema.Struct({
  advertisedAsins: Schema.optional(Schema.Array(Schema.String)),
  asin: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface Inline306 {
  readonly products?: ReadonlyArray<Inline306 | Inline308>;
}
export interface Inline306Encoded {
  readonly products?: ReadonlyArray<Inline306Encoded | Inline308Encoded>;
}
export const Inline306: Schema.Schema<Inline306, Inline306Encoded, never> = Schema.Struct({
  products: Schema.optional(Schema.Array(Schema.Union(Schema.suspend(() => Inline306), Schema.suspend(() => Inline308)))),
});

export interface Inline307 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export interface Inline307Encoded {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export const Inline307: Schema.Schema<Inline307, Inline307Encoded, never> = Schema.Struct({
  advertisedAsins: Schema.optional(Schema.Array(Schema.String)),
  asin: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface Inline308 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline308>;
  readonly name?: string;
}
export interface Inline308Encoded {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline308Encoded>;
  readonly name?: string;
}
export const Inline308: Schema.Schema<Inline308, Inline308Encoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  expression: Schema.optional(Schema.Array(Schema.suspend(() => Inline308))),
  name: Schema.optional(Schema.String),
});

export interface Inline31 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline31Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline31: Schema.Schema<Inline31, Inline31Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline310 {
  readonly code?: string;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline310>;
}
export interface Inline310Encoded {
  readonly code?: string;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline310Encoded>;
}
export const Inline310: Schema.Schema<Inline310, Inline310Encoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  recommendations: Schema.optional(Schema.Array(Schema.suspend(() => Inline310))),
});

export interface Inline311 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
}
export interface Inline311Encoded {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
}
export const Inline311: Schema.Schema<Inline311, Inline311Encoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
});

export interface Inline313 {
  readonly code?: string;
  readonly expression?: ReadonlyArray<Inline313>;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline314>;
}
export interface Inline313Encoded {
  readonly code?: string;
  readonly expression?: ReadonlyArray<Inline313Encoded>;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline314Encoded>;
}
export const Inline313: Schema.Schema<Inline313, Inline313Encoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  expression: Schema.optional(Schema.Array(Schema.suspend(() => Inline313))),
  name: Schema.optional(Schema.String),
  recommendations: Schema.optional(Schema.Array(Schema.suspend(() => Inline314))),
});

export interface Inline314 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export interface Inline314Encoded {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export const Inline314: Schema.Schema<Inline314, Inline314Encoded, never> = Schema.Struct({
  advertisedAsins: Schema.optional(Schema.Array(Schema.String)),
  asin: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface Inline315 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline315>;
  readonly name?: string;
}
export interface Inline315Encoded {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline315Encoded>;
  readonly name?: string;
}
export const Inline315: Schema.Schema<Inline315, Inline315Encoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  expression: Schema.optional(Schema.Array(Schema.suspend(() => Inline315))),
  name: Schema.optional(Schema.String),
});

export interface Inline32 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline32Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline32: Schema.Schema<Inline32, Inline32Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline321 {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}
export interface Inline321Encoded {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}
export const Inline321: Schema.Schema<Inline321, Inline321Encoded, never> = Schema.Struct({
  associatedCampaignIds: Schema.optional(Schema.Array(Schema.String)),
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
  ruleId: Schema.optional(Schema.String),
});

export interface Inline323 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline323;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export interface Inline323Encoded {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline323Encoded;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export const Inline323: Schema.Schema<Inline323, Inline323Encoded, never> = Schema.Struct({
  createdDate: Schema.optional(Schema.Number),
  lastUpdatedDate: Schema.optional(Schema.Number),
  ruleDetails: Schema.optional(Schema.suspend(() => Inline323)),
  ruleId: Schema.String,
  ruleState: Schema.optional(Schema.String),
  ruleStatus: Schema.optional(Schema.String),
});

export interface Inline324 {
  readonly dateRangeTypeRuleDuration?: Inline324;
  readonly eventTypeRuleDuration?: Inline325;
}
export interface Inline324Encoded {
  readonly dateRangeTypeRuleDuration?: Inline324Encoded;
  readonly eventTypeRuleDuration?: Inline325Encoded;
}
export const Inline324: Schema.Schema<Inline324, Inline324Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline324)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline325)),
});

export interface Inline325 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline325Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline325: Schema.Schema<Inline325, Inline325Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline326 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline326Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline326: Schema.Schema<Inline326, Inline326Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline327 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline327>;
  readonly type?: string;
}
export interface Inline327Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline327Encoded>;
  readonly type?: string;
}
export const Inline327: Schema.Schema<Inline327, Inline327Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline327))),
  type: Schema.optional(Schema.String),
});

export interface Inline33 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline33>;
  readonly type?: string;
}
export interface Inline33Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline33Encoded>;
  readonly type?: string;
}
export const Inline33: Schema.Schema<Inline33, Inline33Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline33))),
  type: Schema.optional(Schema.String),
});

export interface Inline330 {
  readonly expiration?: number;
  readonly fileSize?: number;
  readonly location?: string;
  readonly recordType?: string;
  readonly snapshotId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
}
export interface Inline330Encoded {
  readonly expiration?: number;
  readonly fileSize?: number;
  readonly location?: string;
  readonly recordType?: string;
  readonly snapshotId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
}
export const Inline330: Schema.Schema<Inline330, Inline330Encoded, never> = Schema.Struct({
  expiration: Schema.optional(Schema.Number),
  fileSize: Schema.optional(Schema.Number),
  location: Schema.optional(Schema.String),
  recordType: Schema.optional(Schema.String),
  snapshotId: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  statusDetails: Schema.optional(Schema.String),
});

export interface Inline333 {
  readonly results?: ReadonlyArray<Inline333>;
}
export interface Inline333Encoded {
  readonly results?: ReadonlyArray<Inline333Encoded>;
}
export const Inline333: Schema.Schema<Inline333, Inline333Encoded, never> = Schema.Struct({
  results: Schema.optional(Schema.Array(Schema.suspend(() => Inline333))),
});

export interface Inline336 {
  readonly requestStatus?: Inline336;
}
export interface Inline336Encoded {
  readonly requestStatus?: Inline336Encoded;
}
export const Inline336: Schema.Schema<Inline336, Inline336Encoded, never> = Schema.Struct({
  requestStatus: Schema.optional(Schema.suspend(() => Inline336)),
});

export interface Inline339 {
  readonly requestId?: string;
}
export interface Inline339Encoded {
  readonly requestId?: string;
}
export const Inline339: Schema.Schema<Inline339, Inline339Encoded, never> = Schema.Struct({
  requestId: Schema.optional(Schema.String),
});

export interface Inline342 {
  readonly domains?: ReadonlyArray<Inline342>;
  readonly pagination?: Inline343;
}
export interface Inline342Encoded {
  readonly domains?: ReadonlyArray<Inline342Encoded>;
  readonly pagination?: Inline343Encoded;
}
export const Inline342: Schema.Schema<Inline342, Inline342Encoded, never> = Schema.Struct({
  domains: Schema.optional(Schema.Array(Schema.suspend(() => Inline342))),
  pagination: Schema.optional(Schema.suspend(() => Inline343)),
});

export interface Inline343 {
  readonly limit?: number;
  readonly offset?: number;
  readonly total?: number;
}
export interface Inline343Encoded {
  readonly limit?: number;
  readonly offset?: number;
  readonly total?: number;
}
export const Inline343: Schema.Schema<Inline343, Inline343Encoded, never> = Schema.Struct({
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  total: Schema.optional(Schema.Number),
});

export interface Inline345 {
  readonly name: string;
  readonly type: string;
}
export interface Inline345Encoded {
  readonly name: string;
  readonly type: string;
}
export const Inline345: Schema.Schema<Inline345, Inline345Encoded, never> = Schema.Struct({
  name: Schema.String,
  type: Schema.String,
});

export interface Inline347 {
  readonly requestId?: string;
}
export interface Inline347Encoded {
  readonly requestId?: string;
}
export const Inline347: Schema.Schema<Inline347, Inline347Encoded, never> = Schema.Struct({
  requestId: Schema.optional(Schema.String),
});

export interface Inline349 {
  readonly name: string;
  readonly type: string;
}
export interface Inline349Encoded {
  readonly name: string;
  readonly type: string;
}
export const Inline349: Schema.Schema<Inline349, Inline349Encoded, never> = Schema.Struct({
  name: Schema.String,
  type: Schema.String,
});

export interface Inline35 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline35;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export interface Inline35Encoded {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline35Encoded;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export const Inline35: Schema.Schema<Inline35, Inline35Encoded, never> = Schema.Struct({
  createdDate: Schema.optional(Schema.Number),
  lastUpdatedDate: Schema.optional(Schema.Number),
  ruleDetails: Schema.optional(Schema.suspend(() => Inline35)),
  ruleId: Schema.String,
  ruleState: Schema.optional(Schema.String),
  ruleStatus: Schema.optional(Schema.String),
});

export interface Inline351 {
  readonly requestStatusList?: ReadonlyArray<Inline351>;
}
export interface Inline351Encoded {
  readonly requestStatusList?: ReadonlyArray<Inline351Encoded>;
}
export const Inline351: Schema.Schema<Inline351, Inline351Encoded, never> = Schema.Struct({
  requestStatusList: Schema.optional(Schema.Array(Schema.suspend(() => Inline351))),
});

export interface Inline354 {
  readonly budgetIncreaseBy?: Inline354;
  readonly duration?: Inline355;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline357;
  readonly recurrence?: Inline358;
  readonly ruleType?: string;
}
export interface Inline354Encoded {
  readonly budgetIncreaseBy?: Inline354Encoded;
  readonly duration?: Inline355Encoded;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline357Encoded;
  readonly recurrence?: Inline358Encoded;
  readonly ruleType?: string;
}
export const Inline354: Schema.Schema<Inline354, Inline354Encoded, never> = Schema.Struct({
  budgetIncreaseBy: Schema.optional(Schema.suspend(() => Inline354)),
  duration: Schema.optional(Schema.suspend(() => Inline355)),
  name: Schema.optional(Schema.String),
  performanceMeasureCondition: Schema.optional(Schema.suspend(() => Inline357)),
  recurrence: Schema.optional(Schema.suspend(() => Inline358)),
  ruleType: Schema.optional(Schema.String),
});

export interface Inline355 {
  readonly dateRangeTypeRuleDuration?: Inline355;
  readonly eventTypeRuleDuration?: Inline356;
}
export interface Inline355Encoded {
  readonly dateRangeTypeRuleDuration?: Inline355Encoded;
  readonly eventTypeRuleDuration?: Inline356Encoded;
}
export const Inline355: Schema.Schema<Inline355, Inline355Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline355)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline356)),
});

export interface Inline356 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline356Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline356: Schema.Schema<Inline356, Inline356Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline357 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline357Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline357: Schema.Schema<Inline357, Inline357Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline358 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline358>;
  readonly type?: string;
}
export interface Inline358Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline358Encoded>;
  readonly type?: string;
}
export const Inline358: Schema.Schema<Inline358, Inline358Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline358))),
  type: Schema.optional(Schema.String),
});

export interface Inline36 {
  readonly dateRangeTypeRuleDuration?: Inline36;
  readonly eventTypeRuleDuration?: Inline37;
}
export interface Inline36Encoded {
  readonly dateRangeTypeRuleDuration?: Inline36Encoded;
  readonly eventTypeRuleDuration?: Inline37Encoded;
}
export const Inline36: Schema.Schema<Inline36, Inline36Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline36)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline37)),
});

export interface Inline361 {
  readonly budgetIncreaseBy?: Inline361;
  readonly duration?: Inline362;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline364;
  readonly recurrence?: Inline365;
  readonly ruleType?: string;
}
export interface Inline361Encoded {
  readonly budgetIncreaseBy?: Inline361Encoded;
  readonly duration?: Inline362Encoded;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline364Encoded;
  readonly recurrence?: Inline365Encoded;
  readonly ruleType?: string;
}
export const Inline361: Schema.Schema<Inline361, Inline361Encoded, never> = Schema.Struct({
  budgetIncreaseBy: Schema.optional(Schema.suspend(() => Inline361)),
  duration: Schema.optional(Schema.suspend(() => Inline362)),
  name: Schema.optional(Schema.String),
  performanceMeasureCondition: Schema.optional(Schema.suspend(() => Inline364)),
  recurrence: Schema.optional(Schema.suspend(() => Inline365)),
  ruleType: Schema.optional(Schema.String),
});

export interface Inline362 {
  readonly dateRangeTypeRuleDuration?: Inline362;
  readonly eventTypeRuleDuration?: Inline363;
}
export interface Inline362Encoded {
  readonly dateRangeTypeRuleDuration?: Inline362Encoded;
  readonly eventTypeRuleDuration?: Inline363Encoded;
}
export const Inline362: Schema.Schema<Inline362, Inline362Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline362)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline363)),
});

export interface Inline363 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline363Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline363: Schema.Schema<Inline363, Inline363Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline364 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline364Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline364: Schema.Schema<Inline364, Inline364Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline365 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline365>;
  readonly type?: string;
}
export interface Inline365Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline365Encoded>;
  readonly type?: string;
}
export const Inline365: Schema.Schema<Inline365, Inline365Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline365))),
  type: Schema.optional(Schema.String),
});

export interface Inline366 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline366;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export interface Inline366Encoded {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline366Encoded;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export const Inline366: Schema.Schema<Inline366, Inline366Encoded, never> = Schema.Struct({
  createdDate: Schema.optional(Schema.Number),
  lastUpdatedDate: Schema.optional(Schema.Number),
  ruleDetails: Schema.optional(Schema.suspend(() => Inline366)),
  ruleId: Schema.String,
  ruleState: Schema.optional(Schema.String),
  ruleStatus: Schema.optional(Schema.String),
});

export interface Inline367 {
  readonly dateRangeTypeRuleDuration?: Inline367;
  readonly eventTypeRuleDuration?: Inline368;
}
export interface Inline367Encoded {
  readonly dateRangeTypeRuleDuration?: Inline367Encoded;
  readonly eventTypeRuleDuration?: Inline368Encoded;
}
export const Inline367: Schema.Schema<Inline367, Inline367Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline367)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline368)),
});

export interface Inline368 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline368Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline368: Schema.Schema<Inline368, Inline368Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline369 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline369Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline369: Schema.Schema<Inline369, Inline369Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline37 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline37Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline37: Schema.Schema<Inline37, Inline37Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline370 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline370>;
  readonly type?: string;
}
export interface Inline370Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline370Encoded>;
  readonly type?: string;
}
export const Inline370: Schema.Schema<Inline370, Inline370Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline370))),
  type: Schema.optional(Schema.String),
});

export interface Inline373 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline373;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export interface Inline373Encoded {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline373Encoded;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export const Inline373: Schema.Schema<Inline373, Inline373Encoded, never> = Schema.Struct({
  createdDate: Schema.optional(Schema.Number),
  lastUpdatedDate: Schema.optional(Schema.Number),
  ruleDetails: Schema.optional(Schema.suspend(() => Inline373)),
  ruleId: Schema.String,
  ruleState: Schema.optional(Schema.String),
  ruleStatus: Schema.optional(Schema.String),
});

export interface Inline374 {
  readonly dateRangeTypeRuleDuration?: Inline374;
  readonly eventTypeRuleDuration?: Inline375;
}
export interface Inline374Encoded {
  readonly dateRangeTypeRuleDuration?: Inline374Encoded;
  readonly eventTypeRuleDuration?: Inline375Encoded;
}
export const Inline374: Schema.Schema<Inline374, Inline374Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline374)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline375)),
});

export interface Inline375 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline375Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline375: Schema.Schema<Inline375, Inline375Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline376 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline376Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline376: Schema.Schema<Inline376, Inline376Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline377 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline377>;
  readonly type?: string;
}
export interface Inline377Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline377Encoded>;
  readonly type?: string;
}
export const Inline377: Schema.Schema<Inline377, Inline377Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline377))),
  type: Schema.optional(Schema.String),
});

export interface Inline379 {
  readonly budgetRule?: Inline379;
}
export interface Inline379Encoded {
  readonly budgetRule?: Inline379Encoded;
}
export const Inline379: Schema.Schema<Inline379, Inline379Encoded, never> = Schema.Struct({
  budgetRule: Schema.optional(Schema.suspend(() => Inline379)),
});

export interface Inline38 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline38Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline38: Schema.Schema<Inline38, Inline38Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline380 {
  readonly dateRangeTypeRuleDuration?: Inline380;
  readonly eventTypeRuleDuration?: Inline381;
}
export interface Inline380Encoded {
  readonly dateRangeTypeRuleDuration?: Inline380Encoded;
  readonly eventTypeRuleDuration?: Inline381Encoded;
}
export const Inline380: Schema.Schema<Inline380, Inline380Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline380)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline381)),
});

export interface Inline381 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline381Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline381: Schema.Schema<Inline381, Inline381Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline382 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline382Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline382: Schema.Schema<Inline382, Inline382Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline383 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline383>;
  readonly type?: string;
}
export interface Inline383Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline383Encoded>;
  readonly type?: string;
}
export const Inline383: Schema.Schema<Inline383, Inline383Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline383))),
  type: Schema.optional(Schema.String),
});

export interface Inline386 {
  readonly associatedCampaigns?: ReadonlyArray<Inline386>;
  readonly nextToken?: string;
}
export interface Inline386Encoded {
  readonly associatedCampaigns?: ReadonlyArray<Inline386Encoded>;
  readonly nextToken?: string;
}
export const Inline386: Schema.Schema<Inline386, Inline386Encoded, never> = Schema.Struct({
  associatedCampaigns: Schema.optional(Schema.Array(Schema.suspend(() => Inline386))),
  nextToken: Schema.optional(Schema.String),
});

export interface Inline389 {
  readonly associatedRules?: ReadonlyArray<Inline389>;
}
export interface Inline389Encoded {
  readonly associatedRules?: ReadonlyArray<Inline389Encoded>;
}
export const Inline389: Schema.Schema<Inline389, Inline389Encoded, never> = Schema.Struct({
  associatedRules: Schema.optional(Schema.Array(Schema.suspend(() => Inline389))),
});

export interface Inline39 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline39>;
  readonly type?: string;
}
export interface Inline39Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline39Encoded>;
  readonly type?: string;
}
export const Inline39: Schema.Schema<Inline39, Inline39Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline39))),
  type: Schema.optional(Schema.String),
});

export interface Inline390 {
  readonly dateRangeTypeRuleDuration?: Inline390;
  readonly eventTypeRuleDuration?: Inline391;
}
export interface Inline390Encoded {
  readonly dateRangeTypeRuleDuration?: Inline390Encoded;
  readonly eventTypeRuleDuration?: Inline391Encoded;
}
export const Inline390: Schema.Schema<Inline390, Inline390Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline390)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline391)),
});

export interface Inline391 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline391Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline391: Schema.Schema<Inline391, Inline391Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline392 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline392Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline392: Schema.Schema<Inline392, Inline392Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline393 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline393>;
  readonly type?: string;
}
export interface Inline393Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline393Encoded>;
  readonly type?: string;
}
export const Inline393: Schema.Schema<Inline393, Inline393Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline393))),
  type: Schema.optional(Schema.String),
});

export interface Inline398 {

}
export interface Inline398Encoded {

}
export const Inline398: Schema.Schema<Inline398, Inline398Encoded, never> = Schema.Struct({

});

export interface Inline405 {
  readonly recommendations?: ReadonlyArray<Inline405>;
  readonly requestId?: string;
}
export interface Inline405Encoded {
  readonly recommendations?: ReadonlyArray<Inline405Encoded>;
  readonly requestId?: string;
}
export const Inline405: Schema.Schema<Inline405, Inline405Encoded, never> = Schema.Struct({
  recommendations: Schema.optional(Schema.Array(Schema.suspend(() => Inline405))),
  requestId: Schema.optional(Schema.String),
});

export interface Inline408 {
  readonly expiration?: number;
  readonly fileSize?: number;
  readonly location?: string;
  readonly recordType?: string;
  readonly snapshotId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
}
export interface Inline408Encoded {
  readonly expiration?: number;
  readonly fileSize?: number;
  readonly location?: string;
  readonly recordType?: string;
  readonly snapshotId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
}
export const Inline408: Schema.Schema<Inline408, Inline408Encoded, never> = Schema.Struct({
  expiration: Schema.optional(Schema.Number),
  fileSize: Schema.optional(Schema.Number),
  location: Schema.optional(Schema.String),
  recordType: Schema.optional(Schema.String),
  snapshotId: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  statusDetails: Schema.optional(Schema.String),
});

export interface Inline411 {
  readonly expiration?: number;
  readonly fileSize?: number;
  readonly location?: string;
  readonly recordType?: string;
  readonly snapshotId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
}
export interface Inline411Encoded {
  readonly expiration?: number;
  readonly fileSize?: number;
  readonly location?: string;
  readonly recordType?: string;
  readonly snapshotId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
}
export const Inline411: Schema.Schema<Inline411, Inline411Encoded, never> = Schema.Struct({
  expiration: Schema.optional(Schema.Number),
  fileSize: Schema.optional(Schema.Number),
  location: Schema.optional(Schema.String),
  recordType: Schema.optional(Schema.String),
  snapshotId: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  statusDetails: Schema.optional(Schema.String),
});

export interface Inline413 {
  readonly asin: string;
}
export interface Inline413Encoded {
  readonly asin: string;
}
export const Inline413: Schema.Schema<Inline413, Inline413Encoded, never> = Schema.Struct({
  asin: Schema.String,
});

export interface Inline414 {
  readonly targetingClause: Inline414;
}
export interface Inline414Encoded {
  readonly targetingClause: Inline414Encoded;
}
export const Inline414: Schema.Schema<Inline414, Inline414Encoded, never> = Schema.Struct({
  targetingClause: Schema.suspend(() => Inline414),
});

export interface Inline415 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline415>;
}
export interface Inline415Encoded {
  readonly type: string;
  readonly value: ReadonlyArray<Inline415Encoded>;
}
export const Inline415: Schema.Schema<Inline415, Inline415Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.Array(Schema.suspend(() => Inline415)),
});

export interface Inline418 {
  readonly asin: string;
}
export interface Inline418Encoded {
  readonly asin: string;
}
export const Inline418: Schema.Schema<Inline418, Inline418Encoded, never> = Schema.Struct({
  asin: Schema.String,
});

export interface Inline419 {
  readonly targetingClause: Inline419;
}
export interface Inline419Encoded {
  readonly targetingClause: Inline419Encoded;
}
export const Inline419: Schema.Schema<Inline419, Inline419Encoded, never> = Schema.Struct({
  targetingClause: Schema.suspend(() => Inline419),
});

export interface Inline420 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline420>;
}
export interface Inline420Encoded {
  readonly type: string;
  readonly value: ReadonlyArray<Inline420Encoded>;
}
export const Inline420: Schema.Schema<Inline420, Inline420Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.Array(Schema.suspend(() => Inline420)),
});

export interface Inline421 {
  readonly asin: string;
}
export interface Inline421Encoded {
  readonly asin: string;
}
export const Inline421: Schema.Schema<Inline421, Inline421Encoded, never> = Schema.Struct({
  asin: Schema.String,
});

export interface Inline423 {
  readonly recommendations?: Inline423;
}
export interface Inline423Encoded {
  readonly recommendations?: Inline423Encoded;
}
export const Inline423: Schema.Schema<Inline423, Inline423Encoded, never> = Schema.Struct({
  recommendations: Schema.optional(Schema.suspend(() => Inline423)),
});

export interface Inline425 {
  readonly asin: string;
}
export interface Inline425Encoded {
  readonly asin: string;
}
export const Inline425: Schema.Schema<Inline425, Inline425Encoded, never> = Schema.Struct({
  asin: Schema.String,
});

export interface Inline46 {
  readonly endTime?: string;
  readonly startTime?: string;
}
export interface Inline46Encoded {
  readonly endTime?: string;
  readonly startTime?: string;
}
export const Inline46: Schema.Schema<Inline46, Inline46Encoded, never> = Schema.Struct({
  endTime: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
});

export interface Inline49 {
  readonly endDate?: string;
  readonly startDate: string;
}
export interface Inline49Encoded {
  readonly endDate?: string;
  readonly startDate: string;
}
export const Inline49: Schema.Schema<Inline49, Inline49Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  startDate: Schema.String,
});

export interface Inline50 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline50Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline50: Schema.Schema<Inline50, Inline50Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline57 {
  readonly audience?: string;
  readonly name?: string;
  readonly rank?: number;
}
export interface Inline57Encoded {
  readonly audience?: string;
  readonly name?: string;
  readonly rank?: number;
}
export const Inline57: Schema.Schema<Inline57, Inline57Encoded, never> = Schema.Struct({
  audience: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface Inline60 {
  readonly audiences?: ReadonlyArray<Inline60>;
  readonly category?: string;
}
export interface Inline60Encoded {
  readonly audiences?: ReadonlyArray<Inline60Encoded>;
  readonly category?: string;
}
export const Inline60: Schema.Schema<Inline60, Inline60Encoded, never> = Schema.Struct({
  audiences: Schema.optional(Schema.Array(Schema.suspend(() => Inline60))),
  category: Schema.optional(Schema.String),
});

export interface Inline69 {
  readonly createdAt?: string;
  readonly domainId?: number;
  readonly lastModified?: string;
  readonly name?: string;
  readonly state?: string;
  readonly type?: string;
}
export interface Inline69Encoded {
  readonly createdAt?: string;
  readonly domainId?: number;
  readonly lastModified?: string;
  readonly name?: string;
  readonly state?: string;
  readonly type?: string;
}
export const Inline69: Schema.Schema<Inline69, Inline69Encoded, never> = Schema.Struct({
  createdAt: Schema.optional(Schema.String),
  domainId: Schema.optional(Schema.Number),
  lastModified: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});

export interface Inline70 {
  readonly limit?: number;
  readonly offset?: number;
  readonly total?: number;
}
export interface Inline70Encoded {
  readonly limit?: number;
  readonly offset?: number;
  readonly total?: number;
}
export const Inline70: Schema.Schema<Inline70, Inline70Encoded, never> = Schema.Struct({
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  total: Schema.optional(Schema.Number),
});

export interface Inline73 {
  readonly requestId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
  readonly timestamp?: string;
}
export interface Inline73Encoded {
  readonly requestId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
  readonly timestamp?: string;
}
export const Inline73: Schema.Schema<Inline73, Inline73Encoded, never> = Schema.Struct({
  requestId: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  statusDetails: Schema.optional(Schema.String),
  timestamp: Schema.optional(Schema.String),
});

export interface Inline75 {
  readonly name: string;
  readonly type: string;
}
export interface Inline75Encoded {
  readonly name: string;
  readonly type: string;
}
export const Inline75: Schema.Schema<Inline75, Inline75Encoded, never> = Schema.Struct({
  name: Schema.String,
  type: Schema.String,
});

export interface Inline78 {
  readonly details?: string;
  readonly domainId?: number;
  readonly name?: string;
  readonly status?: string;
}
export interface Inline78Encoded {
  readonly details?: string;
  readonly domainId?: number;
  readonly name?: string;
  readonly status?: string;
}
export const Inline78: Schema.Schema<Inline78, Inline78Encoded, never> = Schema.Struct({
  details: Schema.optional(Schema.String),
  domainId: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
});

export interface Inline81 {
  readonly requestId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
  readonly timestamp?: string;
}
export interface Inline81Encoded {
  readonly requestId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
  readonly timestamp?: string;
}
export const Inline81: Schema.Schema<Inline81, Inline81Encoded, never> = Schema.Struct({
  requestId: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  statusDetails: Schema.optional(Schema.String),
  timestamp: Schema.optional(Schema.String),
});

export interface Inline84 {
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
}
export interface Inline84Encoded {
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
}
export const Inline84: Schema.Schema<Inline84, Inline84Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  estimatedMissedClicksLower: Schema.optional(Schema.Number),
  estimatedMissedClicksUpper: Schema.optional(Schema.Number),
  estimatedMissedImpressionsLower: Schema.optional(Schema.Number),
  estimatedMissedImpressionsUpper: Schema.optional(Schema.Number),
  estimatedMissedSalesLower: Schema.optional(Schema.Number),
  estimatedMissedSalesUpper: Schema.optional(Schema.Number),
  estimatedMissedViewableImpressionsLower: Schema.optional(Schema.Number),
  estimatedMissedViewableImpressionsUpper: Schema.optional(Schema.Number),
  percentTimeInBudget: Schema.optional(Schema.Number),
  startDate: Schema.optional(Schema.String),
});

export interface Inline88 {
  readonly campaignId: string;
  readonly code: string;
  readonly details: string;
  readonly index: number;
}
export interface Inline88Encoded {
  readonly campaignId: string;
  readonly code: string;
  readonly details: string;
  readonly index: number;
}
export const Inline88: Schema.Schema<Inline88, Inline88Encoded, never> = Schema.Struct({
  campaignId: Schema.String,
  code: Schema.String,
  details: Schema.String,
  index: Schema.Number,
});

export interface Inline89 {
  readonly campaignId: string;
  readonly index: number;
  readonly sevenDaysMissedOpportunities: Inline89;
  readonly suggestedBudget: number;
}
export interface Inline89Encoded {
  readonly campaignId: string;
  readonly index: number;
  readonly sevenDaysMissedOpportunities: Inline89Encoded;
  readonly suggestedBudget: number;
}
export const Inline89: Schema.Schema<Inline89, Inline89Encoded, never> = Schema.Struct({
  campaignId: Schema.String,
  index: Schema.Number,
  sevenDaysMissedOpportunities: Schema.suspend(() => Inline89),
  suggestedBudget: Schema.Number,
});

export interface Inline9 {
  readonly campaignId?: string;
  readonly code?: string;
  readonly details?: string;
  readonly index?: number;
}
export interface Inline9Encoded {
  readonly campaignId?: string;
  readonly code?: string;
  readonly details?: string;
  readonly index?: number;
}
export const Inline9: Schema.Schema<Inline9, Inline9Encoded, never> = Schema.Struct({
  campaignId: Schema.optional(Schema.String),
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
  index: Schema.optional(Schema.Number),
});

export interface Inline91 {
  readonly budgetIncreaseBy?: Inline91;
  readonly duration?: Inline92;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline94;
  readonly recurrence?: Inline95;
  readonly ruleType?: string;
}
export interface Inline91Encoded {
  readonly budgetIncreaseBy?: Inline91Encoded;
  readonly duration?: Inline92Encoded;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline94Encoded;
  readonly recurrence?: Inline95Encoded;
  readonly ruleType?: string;
}
export const Inline91: Schema.Schema<Inline91, Inline91Encoded, never> = Schema.Struct({
  budgetIncreaseBy: Schema.optional(Schema.suspend(() => Inline91)),
  duration: Schema.optional(Schema.suspend(() => Inline92)),
  name: Schema.optional(Schema.String),
  performanceMeasureCondition: Schema.optional(Schema.suspend(() => Inline94)),
  recurrence: Schema.optional(Schema.suspend(() => Inline95)),
  ruleType: Schema.optional(Schema.String),
});

export interface Inline92 {
  readonly dateRangeTypeRuleDuration?: Inline92;
  readonly eventTypeRuleDuration?: Inline93;
}
export interface Inline92Encoded {
  readonly dateRangeTypeRuleDuration?: Inline92Encoded;
  readonly eventTypeRuleDuration?: Inline93Encoded;
}
export const Inline92: Schema.Schema<Inline92, Inline92Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline92)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline93)),
});

export interface Inline93 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline93Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline93: Schema.Schema<Inline93, Inline93Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface Inline94 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface Inline94Encoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const Inline94: Schema.Schema<Inline94, Inline94Encoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export interface Inline95 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline95>;
  readonly type?: string;
}
export interface Inline95Encoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline95Encoded>;
  readonly type?: string;
}
export const Inline95: Schema.Schema<Inline95, Inline95Encoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline95))),
  type: Schema.optional(Schema.String),
});

export interface Inline97 {
  readonly type: string;
  readonly value: number;
}
export interface Inline97Encoded {
  readonly type: string;
  readonly value: number;
}
export const Inline97: Schema.Schema<Inline97, Inline97Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.Number,
});

export interface Inline98 {
  readonly dateRangeTypeRuleDuration?: Inline98;
  readonly eventTypeRuleDuration?: Inline99;
}
export interface Inline98Encoded {
  readonly dateRangeTypeRuleDuration?: Inline98Encoded;
  readonly eventTypeRuleDuration?: Inline99Encoded;
}
export const Inline98: Schema.Schema<Inline98, Inline98Encoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline98)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline99)),
});

export interface Inline99 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export interface Inline99Encoded {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}
export const Inline99: Schema.Schema<Inline99, Inline99Encoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  eventId: Schema.String,
  eventName: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
});

export interface ListAssociatedBudgetRulesForSDCampaignsParams {
  readonly campaignId: number;
}
export interface ListAssociatedBudgetRulesForSDCampaignsParamsEncoded {
  readonly campaignId: number;
}
export const ListAssociatedBudgetRulesForSDCampaignsParams: Schema.Schema<ListAssociatedBudgetRulesForSDCampaignsParams, ListAssociatedBudgetRulesForSDCampaignsParamsEncoded, never> = Schema.Struct({
  campaignId: Schema.Number,
});

export interface ListAssociatedBudgetRulesForSDCampaignsResponse {
  readonly data: Inline389;
}
export interface ListAssociatedBudgetRulesForSDCampaignsResponseEncoded {
  readonly data: Inline389Encoded;
}
export const ListAssociatedBudgetRulesForSDCampaignsResponse: Schema.Schema<ListAssociatedBudgetRulesForSDCampaignsResponse, ListAssociatedBudgetRulesForSDCampaignsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline389),
});

export interface ListDomainsParams {
  readonly startIndex?: number;
  readonly count?: number;
}
export interface ListDomainsParamsEncoded {
  readonly startIndex?: number;
  readonly count?: number;
}
export const ListDomainsParams: Schema.Schema<ListDomainsParams, ListDomainsParamsEncoded, never> = Schema.Struct({
  startIndex: Schema.optional(Schema.Number),
  count: Schema.optional(Schema.Number),
});

export interface ListDomainsResponse {
  readonly data: Inline342;
}
export interface ListDomainsResponseEncoded {
  readonly data: Inline342Encoded;
}
export const ListDomainsResponse: Schema.Schema<ListDomainsResponse, ListDomainsResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline342),
});

export interface ListRequestStatusParams {

}
export interface ListRequestStatusParamsEncoded {

}
export const ListRequestStatusParams: Schema.Schema<ListRequestStatusParams, ListRequestStatusParamsEncoded, never> = Schema.Struct({

});

export interface ListRequestStatusResponse {
  readonly data: Inline351;
}
export interface ListRequestStatusResponseEncoded {
  readonly data: Inline351Encoded;
}
export const ListRequestStatusResponse: Schema.Schema<ListRequestStatusResponse, ListRequestStatusResponseEncoded, never> = Schema.Struct({
  data: Schema.suspend(() => Inline351),
});

export interface LocationExpression {
  readonly type?: string;
  readonly value?: string;
}
export interface LocationExpressionEncoded {
  readonly type?: string;
  readonly value?: string;
}
export const LocationExpression: Schema.Schema<LocationExpression, LocationExpressionEncoded, never> = Schema.Struct({
  type: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});

export type LocationPredicate = "location" | string;
export type LocationPredicateEncoded = "location" | string;
export const LocationPredicate: Schema.Schema<LocationPredicate, LocationPredicateEncoded, never> = Schema.Union(Schema.Literal("location"), Schema.String);

export interface PerformanceMeasureCondition {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export interface PerformanceMeasureConditionEncoded {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}
export const PerformanceMeasureCondition: Schema.Schema<PerformanceMeasureCondition, PerformanceMeasureConditionEncoded, never> = Schema.Struct({
  comparisonOperator: Schema.String,
  metricName: Schema.String,
  threshold: Schema.Number,
});

export type PerformanceMetric = "ACOS" | "CTR" | "CVR" | "ROAS" | string;
export type PerformanceMetricEncoded = "ACOS" | "CTR" | "CVR" | "ROAS" | string;
export const PerformanceMetric: Schema.Schema<PerformanceMetric, PerformanceMetricEncoded, never> = Schema.Union(Schema.Literal("ACOS", "CTR", "CVR", "ROAS"), Schema.String);

export interface RecommendedHeadline {
  readonly headline?: string;
  readonly headlineId?: string;
}
export interface RecommendedHeadlineEncoded {
  readonly headline?: string;
  readonly headlineId?: string;
}
export const RecommendedHeadline: Schema.Schema<RecommendedHeadline, RecommendedHeadlineEncoded, never> = Schema.Struct({
  headline: Schema.optional(Schema.String),
  headlineId: Schema.optional(Schema.String),
});

export interface Recurrence {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline46>;
  readonly type?: string;
}
export interface RecurrenceEncoded {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline46Encoded>;
  readonly type?: string;
}
export const Recurrence: Schema.Schema<Recurrence, RecurrenceEncoded, never> = Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  intraDaySchedule: Schema.optional(Schema.Array(Schema.suspend(() => Inline46))),
  type: Schema.optional(Schema.String),
});

export type RecurrenceType = "DAILY" | "WEEKLY" | string;
export type RecurrenceTypeEncoded = "DAILY" | "WEEKLY" | string;
export const RecurrenceType: Schema.Schema<RecurrenceType, RecurrenceTypeEncoded, never> = Schema.Union(Schema.Literal("DAILY", "WEEKLY"), Schema.String);

export interface RuleDuration {
  readonly dateRangeTypeRuleDuration?: Inline49;
  readonly eventTypeRuleDuration?: Inline50;
}
export interface RuleDurationEncoded {
  readonly dateRangeTypeRuleDuration?: Inline49Encoded;
  readonly eventTypeRuleDuration?: Inline50Encoded;
}
export const RuleDuration: Schema.Schema<RuleDuration, RuleDurationEncoded, never> = Schema.Struct({
  dateRangeTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline49)),
  eventTypeRuleDuration: Schema.optional(Schema.suspend(() => Inline50)),
});

export interface SDAdvertisedProduct {
  readonly asin?: string;
  readonly landingPageType?: string;
  readonly landingPageURL?: string;
}
export interface SDAdvertisedProductEncoded {
  readonly asin?: string;
  readonly landingPageType?: string;
  readonly landingPageURL?: string;
}
export const SDAdvertisedProduct: Schema.Schema<SDAdvertisedProduct, SDAdvertisedProductEncoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  landingPageType: Schema.optional(Schema.String),
  landingPageURL: Schema.optional(Schema.String),
});

export interface SDAPIError {
  readonly code?: string;
  readonly details?: string;
}
export interface SDAPIErrorEncoded {
  readonly code?: string;
  readonly details?: string;
}
export const SDAPIError: Schema.Schema<SDAPIError, SDAPIErrorEncoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
});

export type SDASIN = string;
export type SDASINEncoded = string;
export const SDASIN: Schema.Schema<SDASIN, SDASINEncoded, never> = Schema.String;

export type SDAudience = string;
export type SDAudienceEncoded = string;
export const SDAudience: Schema.Schema<SDAudience, SDAudienceEncoded, never> = Schema.String;

export type SDAudienceCategory = "In-market" | "Interest" | "Life event" | "Lifestyle" | string;
export type SDAudienceCategoryEncoded = "In-market" | "Interest" | "Life event" | "Lifestyle" | string;
export const SDAudienceCategory: Schema.Schema<SDAudienceCategory, SDAudienceCategoryEncoded, never> = Schema.Union(Schema.Literal("In-market", "Interest", "Life event", "Lifestyle"), Schema.String);

export interface SDAudienceCategoryRecommendations {
  readonly audiences?: ReadonlyArray<Inline57>;
  readonly category?: string;
}
export interface SDAudienceCategoryRecommendationsEncoded {
  readonly audiences?: ReadonlyArray<Inline57Encoded>;
  readonly category?: string;
}
export const SDAudienceCategoryRecommendations: Schema.Schema<SDAudienceCategoryRecommendations, SDAudienceCategoryRecommendationsEncoded, never> = Schema.Struct({
  audiences: Schema.optional(Schema.Array(Schema.suspend(() => Inline57))),
  category: Schema.optional(Schema.String),
});

export interface SDAudienceRecommendation {
  readonly audience?: string;
  readonly name?: string;
  readonly rank?: number;
}
export interface SDAudienceRecommendationEncoded {
  readonly audience?: string;
  readonly name?: string;
  readonly rank?: number;
}
export const SDAudienceRecommendation: Schema.Schema<SDAudienceRecommendation, SDAudienceRecommendationEncoded, never> = Schema.Struct({
  audience: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface SDAudienceRecommendations {
  readonly audiences?: ReadonlyArray<Inline60>;
}
export interface SDAudienceRecommendationsEncoded {
  readonly audiences?: ReadonlyArray<Inline60Encoded>;
}
export const SDAudienceRecommendations: Schema.Schema<SDAudienceRecommendations, SDAudienceRecommendationsEncoded, never> = Schema.Struct({
  audiences: Schema.optional(Schema.Array(Schema.suspend(() => Inline60))),
});

export type SDBidOptimizationV32 = "clicks" | "conversions" | "reach" | string;
export type SDBidOptimizationV32Encoded = "clicks" | "conversions" | "reach" | string;
export const SDBidOptimizationV32: Schema.Schema<SDBidOptimizationV32, SDBidOptimizationV32Encoded, never> = Schema.Union(Schema.Literal("clicks", "conversions", "reach"), Schema.String);

export interface SDBidRecommendationV31 {
  readonly rangeLower: number;
  readonly rangeUpper: number;
  readonly recommended: number;
}
export interface SDBidRecommendationV31Encoded {
  readonly rangeLower: number;
  readonly rangeUpper: number;
  readonly recommended: number;
}
export const SDBidRecommendationV31: Schema.Schema<SDBidRecommendationV31, SDBidRecommendationV31Encoded, never> = Schema.Struct({
  rangeLower: Schema.Number,
  rangeUpper: Schema.Number,
  recommended: Schema.Number,
});

export interface SDBrandSafetyDenyListDomain {
  readonly name: string;
  readonly type: string;
}
export interface SDBrandSafetyDenyListDomainEncoded {
  readonly name: string;
  readonly type: string;
}
export const SDBrandSafetyDenyListDomain: Schema.Schema<SDBrandSafetyDenyListDomain, SDBrandSafetyDenyListDomainEncoded, never> = Schema.Struct({
  name: Schema.String,
  type: Schema.String,
});

export type SDBrandSafetyDenyListDomainState = "ARCHIVED" | "ENABLED" | string;
export type SDBrandSafetyDenyListDomainStateEncoded = "ARCHIVED" | "ENABLED" | string;
export const SDBrandSafetyDenyListDomainState: Schema.Schema<SDBrandSafetyDenyListDomainState, SDBrandSafetyDenyListDomainStateEncoded, never> = Schema.Union(Schema.Literal("ARCHIVED", "ENABLED"), Schema.String);

export type SDBrandSafetyDenyListDomainType = "APP" | "CREATOR" | "WEBSITE" | string;
export type SDBrandSafetyDenyListDomainTypeEncoded = "APP" | "CREATOR" | "WEBSITE" | string;
export const SDBrandSafetyDenyListDomainType: Schema.Schema<SDBrandSafetyDenyListDomainType, SDBrandSafetyDenyListDomainTypeEncoded, never> = Schema.Union(Schema.Literal("APP", "CREATOR", "WEBSITE"), Schema.String);

export type SDBrandSafetyDenyListDomainUpdateResultStatus = "FAILURE" | "SUCCESS" | string;
export type SDBrandSafetyDenyListDomainUpdateResultStatusEncoded = "FAILURE" | "SUCCESS" | string;
export const SDBrandSafetyDenyListDomainUpdateResultStatus: Schema.Schema<SDBrandSafetyDenyListDomainUpdateResultStatus, SDBrandSafetyDenyListDomainUpdateResultStatusEncoded, never> = Schema.Union(Schema.Literal("FAILURE", "SUCCESS"), Schema.String);

export interface SDBrandSafetyDenyListProcessedDomain {
  readonly createdAt?: string;
  readonly domainId?: number;
  readonly lastModified?: string;
  readonly name?: string;
  readonly state?: string;
  readonly type?: string;
}
export interface SDBrandSafetyDenyListProcessedDomainEncoded {
  readonly createdAt?: string;
  readonly domainId?: number;
  readonly lastModified?: string;
  readonly name?: string;
  readonly state?: string;
  readonly type?: string;
}
export const SDBrandSafetyDenyListProcessedDomain: Schema.Schema<SDBrandSafetyDenyListProcessedDomain, SDBrandSafetyDenyListProcessedDomainEncoded, never> = Schema.Struct({
  createdAt: Schema.optional(Schema.String),
  domainId: Schema.optional(Schema.Number),
  lastModified: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});

export interface SDBrandSafetyGetResponse {
  readonly domains?: ReadonlyArray<Inline69>;
  readonly pagination?: Inline70;
}
export interface SDBrandSafetyGetResponseEncoded {
  readonly domains?: ReadonlyArray<Inline69Encoded>;
  readonly pagination?: Inline70Encoded;
}
export const SDBrandSafetyGetResponse: Schema.Schema<SDBrandSafetyGetResponse, SDBrandSafetyGetResponseEncoded, never> = Schema.Struct({
  domains: Schema.optional(Schema.Array(Schema.suspend(() => Inline69))),
  pagination: Schema.optional(Schema.suspend(() => Inline70)),
});

export interface SDBrandSafetyGetResponsePagination {
  readonly limit?: number;
  readonly offset?: number;
  readonly total?: number;
}
export interface SDBrandSafetyGetResponsePaginationEncoded {
  readonly limit?: number;
  readonly offset?: number;
  readonly total?: number;
}
export const SDBrandSafetyGetResponsePagination: Schema.Schema<SDBrandSafetyGetResponsePagination, SDBrandSafetyGetResponsePaginationEncoded, never> = Schema.Struct({
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  total: Schema.optional(Schema.Number),
});

export interface SDBrandSafetyListRequestStatusResponse {
  readonly requestStatusList?: ReadonlyArray<Inline73>;
}
export interface SDBrandSafetyListRequestStatusResponseEncoded {
  readonly requestStatusList?: ReadonlyArray<Inline73Encoded>;
}
export const SDBrandSafetyListRequestStatusResponse: Schema.Schema<SDBrandSafetyListRequestStatusResponse, SDBrandSafetyListRequestStatusResponseEncoded, never> = Schema.Struct({
  requestStatusList: Schema.optional(Schema.Array(Schema.suspend(() => Inline73))),
});

export interface SDBrandSafetyPostRequest {
  readonly domains: ReadonlyArray<Inline75>;
}
export interface SDBrandSafetyPostRequestEncoded {
  readonly domains: ReadonlyArray<Inline75Encoded>;
}
export const SDBrandSafetyPostRequest: Schema.Schema<SDBrandSafetyPostRequest, SDBrandSafetyPostRequestEncoded, never> = Schema.Struct({
  domains: Schema.Array(Schema.suspend(() => Inline75)),
});

export interface SDBrandSafetyRequestResult {
  readonly details?: string;
  readonly domainId?: number;
  readonly name?: string;
  readonly status?: string;
}
export interface SDBrandSafetyRequestResultEncoded {
  readonly details?: string;
  readonly domainId?: number;
  readonly name?: string;
  readonly status?: string;
}
export const SDBrandSafetyRequestResult: Schema.Schema<SDBrandSafetyRequestResult, SDBrandSafetyRequestResultEncoded, never> = Schema.Struct({
  details: Schema.optional(Schema.String),
  domainId: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
});

export interface SDBrandSafetyRequestResultsResponse {
  readonly results?: ReadonlyArray<Inline78>;
}
export interface SDBrandSafetyRequestResultsResponseEncoded {
  readonly results?: ReadonlyArray<Inline78Encoded>;
}
export const SDBrandSafetyRequestResultsResponse: Schema.Schema<SDBrandSafetyRequestResultsResponse, SDBrandSafetyRequestResultsResponseEncoded, never> = Schema.Struct({
  results: Schema.optional(Schema.Array(Schema.suspend(() => Inline78))),
});

export interface SDBrandSafetyRequestStatus {
  readonly requestId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
  readonly timestamp?: string;
}
export interface SDBrandSafetyRequestStatusEncoded {
  readonly requestId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
  readonly timestamp?: string;
}
export const SDBrandSafetyRequestStatus: Schema.Schema<SDBrandSafetyRequestStatus, SDBrandSafetyRequestStatusEncoded, never> = Schema.Struct({
  requestId: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  statusDetails: Schema.optional(Schema.String),
  timestamp: Schema.optional(Schema.String),
});

export interface SDBrandSafetyRequestStatusResponse {
  readonly requestStatus?: Inline81;
}
export interface SDBrandSafetyRequestStatusResponseEncoded {
  readonly requestStatus?: Inline81Encoded;
}
export const SDBrandSafetyRequestStatusResponse: Schema.Schema<SDBrandSafetyRequestStatusResponse, SDBrandSafetyRequestStatusResponseEncoded, never> = Schema.Struct({
  requestStatus: Schema.optional(Schema.suspend(() => Inline81)),
});

export interface SDBrandSafetyUpdateResponse {
  readonly requestId?: string;
}
export interface SDBrandSafetyUpdateResponseEncoded {
  readonly requestId?: string;
}
export const SDBrandSafetyUpdateResponse: Schema.Schema<SDBrandSafetyUpdateResponse, SDBrandSafetyUpdateResponseEncoded, never> = Schema.Struct({
  requestId: Schema.optional(Schema.String),
});

export interface SDBudgetRecommendation {
  readonly campaignId: string;
  readonly index: number;
  readonly sevenDaysMissedOpportunities: Inline84;
  readonly suggestedBudget: number;
}
export interface SDBudgetRecommendationEncoded {
  readonly campaignId: string;
  readonly index: number;
  readonly sevenDaysMissedOpportunities: Inline84Encoded;
  readonly suggestedBudget: number;
}
export const SDBudgetRecommendation: Schema.Schema<SDBudgetRecommendation, SDBudgetRecommendationEncoded, never> = Schema.Struct({
  campaignId: Schema.String,
  index: Schema.Number,
  sevenDaysMissedOpportunities: Schema.suspend(() => Inline84),
  suggestedBudget: Schema.Number,
});

export interface SDBudgetRecommendationError {
  readonly campaignId: string;
  readonly code: string;
  readonly details: string;
  readonly index: number;
}
export interface SDBudgetRecommendationErrorEncoded {
  readonly campaignId: string;
  readonly code: string;
  readonly details: string;
  readonly index: number;
}
export const SDBudgetRecommendationError: Schema.Schema<SDBudgetRecommendationError, SDBudgetRecommendationErrorEncoded, never> = Schema.Struct({
  campaignId: Schema.String,
  code: Schema.String,
  details: Schema.String,
  index: Schema.Number,
});

export interface SDBudgetRecommendationsRequest {
  readonly campaignIds: ReadonlyArray<string>;
}
export interface SDBudgetRecommendationsRequestEncoded {
  readonly campaignIds: ReadonlyArray<string>;
}
export const SDBudgetRecommendationsRequest: Schema.Schema<SDBudgetRecommendationsRequest, SDBudgetRecommendationsRequestEncoded, never> = Schema.Struct({
  campaignIds: Schema.Array(Schema.String),
});

export interface SDBudgetRecommendationsResponse {
  readonly budgetRecommendationsErrorResults: ReadonlyArray<Inline88>;
  readonly budgetRecommendationsSuccessResults: ReadonlyArray<Inline89>;
}
export interface SDBudgetRecommendationsResponseEncoded {
  readonly budgetRecommendationsErrorResults: ReadonlyArray<Inline88Encoded>;
  readonly budgetRecommendationsSuccessResults: ReadonlyArray<Inline89Encoded>;
}
export const SDBudgetRecommendationsResponse: Schema.Schema<SDBudgetRecommendationsResponse, SDBudgetRecommendationsResponseEncoded, never> = Schema.Struct({
  budgetRecommendationsErrorResults: Schema.Array(Schema.suspend(() => Inline88)),
  budgetRecommendationsSuccessResults: Schema.Array(Schema.suspend(() => Inline89)),
});

export interface SDBudgetRule {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline91;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export interface SDBudgetRuleEncoded {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline91Encoded;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}
export const SDBudgetRule: Schema.Schema<SDBudgetRule, SDBudgetRuleEncoded, never> = Schema.Struct({
  createdDate: Schema.optional(Schema.Number),
  lastUpdatedDate: Schema.optional(Schema.Number),
  ruleDetails: Schema.optional(Schema.suspend(() => Inline91)),
  ruleId: Schema.String,
  ruleState: Schema.optional(Schema.String),
  ruleStatus: Schema.optional(Schema.String),
});

export interface SDBudgetRuleDetails {
  readonly budgetIncreaseBy?: Inline97;
  readonly duration?: Inline98;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline100;
  readonly recurrence?: Inline101;
  readonly ruleType?: string;
}
export interface SDBudgetRuleDetailsEncoded {
  readonly budgetIncreaseBy?: Inline97Encoded;
  readonly duration?: Inline98Encoded;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline100Encoded;
  readonly recurrence?: Inline101Encoded;
  readonly ruleType?: string;
}
export const SDBudgetRuleDetails: Schema.Schema<SDBudgetRuleDetails, SDBudgetRuleDetailsEncoded, never> = Schema.Struct({
  budgetIncreaseBy: Schema.optional(Schema.suspend(() => Inline97)),
  duration: Schema.optional(Schema.suspend(() => Inline98)),
  name: Schema.optional(Schema.String),
  performanceMeasureCondition: Schema.optional(Schema.suspend(() => Inline100)),
  recurrence: Schema.optional(Schema.suspend(() => Inline101)),
  ruleType: Schema.optional(Schema.String),
});

export interface SdCampaignsBudgetUsageParams {
  readonly campaignIds?: ReadonlyArray<string>;
}
export interface SdCampaignsBudgetUsageParamsEncoded {
  readonly campaignIds?: ReadonlyArray<string>;
}
export const SdCampaignsBudgetUsageParams: Schema.Schema<SdCampaignsBudgetUsageParams, SdCampaignsBudgetUsageParamsEncoded, never> = Schema.Struct({
  campaignIds: Schema.optional(Schema.Array(Schema.String)),
});

export interface SdCampaignsBudgetUsageResponse {

}
export interface SdCampaignsBudgetUsageResponseEncoded {

}
export const SdCampaignsBudgetUsageResponse: Schema.Schema<SdCampaignsBudgetUsageResponse, SdCampaignsBudgetUsageResponseEncoded, never> = Schema.Struct({

});

export type SDCategory = number;
export type SDCategoryEncoded = number;
export const SDCategory: Schema.Schema<SDCategory, SDCategoryEncoded, never> = Schema.Number;

export interface SDCategoryRecommendation {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline104;
}
export interface SDCategoryRecommendationEncoded {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline104Encoded;
}
export const SDCategoryRecommendation: Schema.Schema<SDCategoryRecommendation, SDCategoryRecommendationEncoded, never> = Schema.Struct({
  category: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  path: Schema.optional(Schema.Array(Schema.String)),
  rank: Schema.optional(Schema.Number),
  targetableAsinCountRange: Schema.optional(Schema.suspend(() => Inline104)),
});

export interface SDCategoryRecommendations {
  readonly categories?: ReadonlyArray<Inline106>;
}
export interface SDCategoryRecommendationsEncoded {
  readonly categories?: ReadonlyArray<Inline106Encoded>;
}
export const SDCategoryRecommendations: Schema.Schema<SDCategoryRecommendations, SDCategoryRecommendationsEncoded, never> = Schema.Struct({
  categories: Schema.optional(Schema.Array(Schema.suspend(() => Inline106))),
});

export interface SDCategoryRecommendationsV33 {
  readonly categories?: ReadonlyArray<Inline108>;
}
export interface SDCategoryRecommendationsV33Encoded {
  readonly categories?: ReadonlyArray<Inline108Encoded>;
}
export const SDCategoryRecommendationsV33: Schema.Schema<SDCategoryRecommendationsV33, SDCategoryRecommendationsV33Encoded, never> = Schema.Struct({
  categories: Schema.optional(Schema.Array(Schema.suspend(() => Inline108))),
});

export interface SDCategoryRecommendationV33 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline110;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}
export interface SDCategoryRecommendationV33Encoded {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline110Encoded;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}
export const SDCategoryRecommendationV33: Schema.Schema<SDCategoryRecommendationV33, SDCategoryRecommendationV33Encoded, never> = Schema.Struct({
  category: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  path: Schema.optional(Schema.Array(Schema.String)),
  rank: Schema.optional(Schema.Number),
  targetableAsinCountRange: Schema.optional(Schema.suspend(() => Inline110)),
  translatedName: Schema.optional(Schema.String),
  translatedPath: Schema.optional(Schema.Array(Schema.String)),
});

export type SDContentCategory = string;
export type SDContentCategoryEncoded = string;
export const SDContentCategory: Schema.Schema<SDContentCategory, SDContentCategoryEncoded, never> = Schema.String;

export interface SDContentCategoryRecommendations {
  readonly contentCategory?: string;
  readonly name?: string;
  readonly rank?: number;
}
export interface SDContentCategoryRecommendationsEncoded {
  readonly contentCategory?: string;
  readonly name?: string;
  readonly rank?: number;
}
export const SDContentCategoryRecommendations: Schema.Schema<SDContentCategoryRecommendations, SDContentCategoryRecommendationsEncoded, never> = Schema.Struct({
  contentCategory: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface SDContentTargetingPredicateV31 {
  readonly type: string;
  readonly value: string;
}
export interface SDContentTargetingPredicateV31Encoded {
  readonly type: string;
  readonly value: string;
}
export const SDContentTargetingPredicateV31: Schema.Schema<SDContentTargetingPredicateV31, SDContentTargetingPredicateV31Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.String,
});

export type SDCostTypeV31 = "cpc" | "vcpm" | string;
export type SDCostTypeV31Encoded = "cpc" | "vcpm" | string;
export const SDCostTypeV31: Schema.Schema<SDCostTypeV31, SDCostTypeV31Encoded, never> = Schema.Union(Schema.Literal("cpc", "vcpm"), Schema.String);

export type SDCreativeType = "IMAGE" | "VIDEO" | string;
export type SDCreativeTypeEncoded = "IMAGE" | "VIDEO" | string;
export const SDCreativeType: Schema.Schema<SDCreativeType, SDCreativeTypeEncoded, never> = Schema.Union(Schema.Literal("IMAGE", "VIDEO"), Schema.String);

export interface SdDefaultError {
  readonly code?: string;
  readonly details?: string;
}
export interface SdDefaultErrorEncoded {
  readonly code?: string;
  readonly details?: string;
}
export const SdDefaultError: Schema.Schema<SdDefaultError, SdDefaultErrorEncoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
});

export interface SDErrorResponse {
  readonly code?: string;
  readonly details?: string;
}
export interface SDErrorResponseEncoded {
  readonly code?: string;
  readonly details?: string;
}
export const SDErrorResponse: Schema.Schema<SDErrorResponse, SDErrorResponseEncoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
});

export interface SDGetAssociatedCampaignsResponse {
  readonly associatedCampaigns?: ReadonlyArray<Inline119>;
  readonly nextToken?: string;
}
export interface SDGetAssociatedCampaignsResponseEncoded {
  readonly associatedCampaigns?: ReadonlyArray<Inline119Encoded>;
  readonly nextToken?: string;
}
export const SDGetAssociatedCampaignsResponse: Schema.Schema<SDGetAssociatedCampaignsResponse, SDGetAssociatedCampaignsResponseEncoded, never> = Schema.Struct({
  associatedCampaigns: Schema.optional(Schema.Array(Schema.suspend(() => Inline119))),
  nextToken: Schema.optional(Schema.String),
});

export interface SDGoalProduct {
  readonly asin: string;
}
export interface SDGoalProductEncoded {
  readonly asin: string;
}
export const SDGoalProduct: Schema.Schema<SDGoalProduct, SDGoalProductEncoded, never> = Schema.Struct({
  asin: Schema.String,
});

export interface SDHeadlineRecommendationAccessDeniedException {
  readonly code?: string;
  readonly details?: string;
}
export interface SDHeadlineRecommendationAccessDeniedExceptionEncoded {
  readonly code?: string;
  readonly details?: string;
}
export const SDHeadlineRecommendationAccessDeniedException: Schema.Schema<SDHeadlineRecommendationAccessDeniedException, SDHeadlineRecommendationAccessDeniedExceptionEncoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
});

export interface SDHeadlineRecommendationIdentifierNotfoundException {
  readonly code?: string;
  readonly details?: string;
}
export interface SDHeadlineRecommendationIdentifierNotfoundExceptionEncoded {
  readonly code?: string;
  readonly details?: string;
}
export const SDHeadlineRecommendationIdentifierNotfoundException: Schema.Schema<SDHeadlineRecommendationIdentifierNotfoundException, SDHeadlineRecommendationIdentifierNotfoundExceptionEncoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
});

export interface SDHeadlineRecommendationInternalServerException {
  readonly code?: string;
  readonly details?: string;
}
export interface SDHeadlineRecommendationInternalServerExceptionEncoded {
  readonly code?: string;
  readonly details?: string;
}
export const SDHeadlineRecommendationInternalServerException: Schema.Schema<SDHeadlineRecommendationInternalServerException, SDHeadlineRecommendationInternalServerExceptionEncoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
});

export interface SDHeadlineRecommendationMarsThrottlingException {
  readonly code?: string;
  readonly details?: string;
}
export interface SDHeadlineRecommendationMarsThrottlingExceptionEncoded {
  readonly code?: string;
  readonly details?: string;
}
export const SDHeadlineRecommendationMarsThrottlingException: Schema.Schema<SDHeadlineRecommendationMarsThrottlingException, SDHeadlineRecommendationMarsThrottlingExceptionEncoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
});

export interface SDHeadlineRecommendationNotAcceptableException {
  readonly code?: string;
  readonly details?: string;
}
export interface SDHeadlineRecommendationNotAcceptableExceptionEncoded {
  readonly code?: string;
  readonly details?: string;
}
export const SDHeadlineRecommendationNotAcceptableException: Schema.Schema<SDHeadlineRecommendationNotAcceptableException, SDHeadlineRecommendationNotAcceptableExceptionEncoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
});

export interface SDHeadlineRecommendationRequest {
  readonly adFormat?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly maxNumRecommendations?: number;
}
export interface SDHeadlineRecommendationRequestEncoded {
  readonly adFormat?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly maxNumRecommendations?: number;
}
export const SDHeadlineRecommendationRequest: Schema.Schema<SDHeadlineRecommendationRequest, SDHeadlineRecommendationRequestEncoded, never> = Schema.Struct({
  adFormat: Schema.optional(Schema.String),
  asins: Schema.optional(Schema.Array(Schema.String)),
  maxNumRecommendations: Schema.optional(Schema.Number),
});

export interface SDHeadlineRecommendationResponse {
  readonly recommendations?: ReadonlyArray<Inline128>;
  readonly requestId?: string;
}
export interface SDHeadlineRecommendationResponseEncoded {
  readonly recommendations?: ReadonlyArray<Inline128Encoded>;
  readonly requestId?: string;
}
export const SDHeadlineRecommendationResponse: Schema.Schema<SDHeadlineRecommendationResponse, SDHeadlineRecommendationResponseEncoded, never> = Schema.Struct({
  recommendations: Schema.optional(Schema.Array(Schema.suspend(() => Inline128))),
  requestId: Schema.optional(Schema.String),
});

export interface SDHeadlineRecommendationSchemaValidationException {
  readonly code?: string;
  readonly details?: string;
}
export interface SDHeadlineRecommendationSchemaValidationExceptionEncoded {
  readonly code?: string;
  readonly details?: string;
}
export const SDHeadlineRecommendationSchemaValidationException: Schema.Schema<SDHeadlineRecommendationSchemaValidationException, SDHeadlineRecommendationSchemaValidationExceptionEncoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
});

export type SDLandingPageType = "OFF_AMAZON_LINK" | string;
export type SDLandingPageTypeEncoded = "OFF_AMAZON_LINK" | string;
export const SDLandingPageType: Schema.Schema<SDLandingPageType, SDLandingPageTypeEncoded, never> = Schema.Union(Schema.Literal("OFF_AMAZON_LINK"), Schema.String);

export type SDLandingPageURL = string;
export type SDLandingPageURLEncoded = string;
export const SDLandingPageURL: Schema.Schema<SDLandingPageURL, SDLandingPageURLEncoded, never> = Schema.String;

export interface SDListAssociatedBudgetRulesResponse {
  readonly associatedRules?: ReadonlyArray<Inline133>;
}
export interface SDListAssociatedBudgetRulesResponseEncoded {
  readonly associatedRules?: ReadonlyArray<Inline133Encoded>;
}
export const SDListAssociatedBudgetRulesResponse: Schema.Schema<SDListAssociatedBudgetRulesResponse, SDListAssociatedBudgetRulesResponseEncoded, never> = Schema.Struct({
  associatedRules: Schema.optional(Schema.Array(Schema.suspend(() => Inline133))),
});

export type SDLocale = "ar_AE" | "de_DE" | "en_AE" | "en_AU" | "en_CA" | "en_GB" | "en_IN" | "en_SG" | "en_US" | "es_ES" | "es_MX" | "fr_CA" | "fr_FR" | "hi_IN" | "it_IT" | "ja_JP" | "ko_KR" | "nl_NL" | "pl_PL" | "pt_BR" | "sv_SE" | "ta_IN" | "th_TH" | "tr_TR" | "vi_VN" | "zh_CN" | string;
export type SDLocaleEncoded = "ar_AE" | "de_DE" | "en_AE" | "en_AU" | "en_CA" | "en_GB" | "en_IN" | "en_SG" | "en_US" | "es_ES" | "es_MX" | "fr_CA" | "fr_FR" | "hi_IN" | "it_IT" | "ja_JP" | "ko_KR" | "nl_NL" | "pl_PL" | "pt_BR" | "sv_SE" | "ta_IN" | "th_TH" | "tr_TR" | "vi_VN" | "zh_CN" | string;
export const SDLocale: Schema.Schema<SDLocale, SDLocaleEncoded, never> = Schema.Union(Schema.Literal("ar_AE", "de_DE", "en_AE", "en_AU", "en_CA", "en_GB", "en_IN", "en_SG", "en_US", "es_ES", "es_MX", "fr_CA", "fr_FR", "hi_IN", "it_IT", "ja_JP", "ko_KR", "nl_NL", "pl_PL", "pt_BR", "sv_SE", "ta_IN", "th_TH", "tr_TR", "vi_VN", "zh_CN"), Schema.String);

export interface SDProductRecommendation {
  readonly asin?: string;
  readonly rank?: number;
}
export interface SDProductRecommendationEncoded {
  readonly asin?: string;
  readonly rank?: number;
}
export const SDProductRecommendation: Schema.Schema<SDProductRecommendation, SDProductRecommendationEncoded, never> = Schema.Struct({
  asin: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface SDProductRecommendationsV31 {
  readonly products?: ReadonlyArray<Inline141>;
}
export interface SDProductRecommendationsV31Encoded {
  readonly products?: ReadonlyArray<Inline141Encoded>;
}
export const SDProductRecommendationsV31: Schema.Schema<SDProductRecommendationsV31, SDProductRecommendationsV31Encoded, never> = Schema.Struct({
  products: Schema.optional(Schema.Array(Schema.suspend(() => Inline141))),
});

export interface SDProductRecommendationsV32 {
  readonly products?: ReadonlyArray<Inline143>;
}
export interface SDProductRecommendationsV32Encoded {
  readonly products?: ReadonlyArray<Inline143Encoded>;
}
export const SDProductRecommendationsV32: Schema.Schema<SDProductRecommendationsV32, SDProductRecommendationsV32Encoded, never> = Schema.Struct({
  products: Schema.optional(Schema.Array(Schema.suspend(() => Inline143))),
});

export interface SDProductRecommendationV32 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export interface SDProductRecommendationV32Encoded {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}
export const SDProductRecommendationV32: Schema.Schema<SDProductRecommendationV32, SDProductRecommendationV32Encoded, never> = Schema.Struct({
  advertisedAsins: Schema.optional(Schema.Array(Schema.String)),
  asin: Schema.optional(Schema.String),
  rank: Schema.optional(Schema.Number),
});

export interface SDProductTargetingRecommendationsSuccess {
  readonly code?: string;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline146>;
}
export interface SDProductTargetingRecommendationsSuccessEncoded {
  readonly code?: string;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline146Encoded>;
}
export const SDProductTargetingRecommendationsSuccess: Schema.Schema<SDProductTargetingRecommendationsSuccess, SDProductTargetingRecommendationsSuccessEncoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  recommendations: Schema.optional(Schema.Array(Schema.suspend(() => Inline146))),
});

export interface SDProductTargetingRecommendationsSuccessV34 {
  readonly code?: string;
  readonly expression?: ReadonlyArray<Inline148>;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline149>;
}
export interface SDProductTargetingRecommendationsSuccessV34Encoded {
  readonly code?: string;
  readonly expression?: ReadonlyArray<Inline148Encoded>;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline149Encoded>;
}
export const SDProductTargetingRecommendationsSuccessV34: Schema.Schema<SDProductTargetingRecommendationsSuccessV34, SDProductTargetingRecommendationsSuccessV34Encoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  expression: Schema.optional(Schema.Array(Schema.suspend(() => Inline148))),
  name: Schema.optional(Schema.String),
  recommendations: Schema.optional(Schema.Array(Schema.suspend(() => Inline149))),
});

export interface SDProductTargetingTheme {
  readonly expression: ReadonlyArray<Inline151>;
  readonly name: string;
}
export interface SDProductTargetingThemeEncoded {
  readonly expression: ReadonlyArray<Inline151Encoded>;
  readonly name: string;
}
export const SDProductTargetingTheme: Schema.Schema<SDProductTargetingTheme, SDProductTargetingThemeEncoded, never> = Schema.Struct({
  expression: Schema.Array(Schema.suspend(() => Inline151)),
  name: Schema.String,
});

export interface SDProductTargetingThemeExpression {
  readonly type: string;
}
export interface SDProductTargetingThemeExpressionEncoded {
  readonly type: string;
}
export const SDProductTargetingThemeExpression: Schema.Schema<SDProductTargetingThemeExpression, SDProductTargetingThemeExpressionEncoded, never> = Schema.Struct({
  type: Schema.String,
});

export type SDProductThemeRecommendations = ReadonlyArray<Inline154 | Inline155>;
export type SDProductThemeRecommendationsEncoded = ReadonlyArray<Inline154Encoded | Inline155Encoded>;
export const SDProductThemeRecommendations: Schema.Schema<SDProductThemeRecommendations, SDProductThemeRecommendationsEncoded, never> = Schema.Array(Schema.Union(Schema.suspend(() => Inline154), Schema.suspend(() => Inline155)));

export type SDProductThemeRecommendationsV34 = ReadonlyArray<Inline157 | Inline159>;
export type SDProductThemeRecommendationsV34Encoded = ReadonlyArray<Inline157Encoded | Inline159Encoded>;
export const SDProductThemeRecommendationsV34: Schema.Schema<SDProductThemeRecommendationsV34, SDProductThemeRecommendationsV34Encoded, never> = Schema.Array(Schema.Union(Schema.suspend(() => Inline157), Schema.suspend(() => Inline159)));

export type SDRecommendationType = "PRODUCT" | string;
export type SDRecommendationTypeEncoded = "PRODUCT" | string;
export const SDRecommendationType: Schema.Schema<SDRecommendationType, SDRecommendationTypeEncoded, never> = Schema.Union(Schema.Literal("PRODUCT"), Schema.String);

export type SDRecommendationTypeV31 = "CATEGORY" | "PRODUCT" | string;
export type SDRecommendationTypeV31Encoded = "CATEGORY" | "PRODUCT" | string;
export const SDRecommendationTypeV31: Schema.Schema<SDRecommendationTypeV31, SDRecommendationTypeV31Encoded, never> = Schema.Union(Schema.Literal("CATEGORY", "PRODUCT"), Schema.String);

export type SDRecommendationTypeV32 = "AUDIENCE" | "CATEGORY" | "PRODUCT" | string;
export type SDRecommendationTypeV32Encoded = "AUDIENCE" | "CATEGORY" | "PRODUCT" | string;
export const SDRecommendationTypeV32: Schema.Schema<SDRecommendationTypeV32, SDRecommendationTypeV32Encoded, never> = Schema.Union(Schema.Literal("AUDIENCE", "CATEGORY", "PRODUCT"), Schema.String);

export type SDRecommendationTypeV33 = "AUDIENCE" | "CATEGORY" | "CONTENT_CATEGORY" | "PRODUCT" | string;
export type SDRecommendationTypeV33Encoded = "AUDIENCE" | "CATEGORY" | "CONTENT_CATEGORY" | "PRODUCT" | string;
export const SDRecommendationTypeV33: Schema.Schema<SDRecommendationTypeV33, SDRecommendationTypeV33Encoded, never> = Schema.Union(Schema.Literal("AUDIENCE", "CATEGORY", "CONTENT_CATEGORY", "PRODUCT"), Schema.String);

export type SDRuleType = "PERFORMANCE" | "SCHEDULE" | string;
export type SDRuleTypeEncoded = "PERFORMANCE" | "SCHEDULE" | string;
export const SDRuleType: Schema.Schema<SDRuleType, SDRuleTypeEncoded, never> = Schema.Union(Schema.Literal("PERFORMANCE", "SCHEDULE"), Schema.String);

export interface SDSevenDaysMissedOpportunities {
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
}
export interface SDSevenDaysMissedOpportunitiesEncoded {
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
}
export const SDSevenDaysMissedOpportunities: Schema.Schema<SDSevenDaysMissedOpportunities, SDSevenDaysMissedOpportunitiesEncoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.String),
  estimatedMissedClicksLower: Schema.optional(Schema.Number),
  estimatedMissedClicksUpper: Schema.optional(Schema.Number),
  estimatedMissedImpressionsLower: Schema.optional(Schema.Number),
  estimatedMissedImpressionsUpper: Schema.optional(Schema.Number),
  estimatedMissedSalesLower: Schema.optional(Schema.Number),
  estimatedMissedSalesUpper: Schema.optional(Schema.Number),
  estimatedMissedViewableImpressionsLower: Schema.optional(Schema.Number),
  estimatedMissedViewableImpressionsUpper: Schema.optional(Schema.Number),
  percentTimeInBudget: Schema.optional(Schema.Number),
  startDate: Schema.optional(Schema.String),
});

export type SDTactic = "T00001" | "T00010" | "T00020" | "remarketing" | string;
export type SDTacticEncoded = "T00001" | "T00010" | "T00020" | "remarketing" | string;
export const SDTactic: Schema.Schema<SDTactic, SDTacticEncoded, never> = Schema.Union(Schema.Literal("T00001", "T00010", "T00020", "remarketing"), Schema.String);

export type SDTacticV31 = "T00001" | "T00010" | "T00020" | "T00030" | "remarketing" | string;
export type SDTacticV31Encoded = "T00001" | "T00010" | "T00020" | "T00030" | "remarketing" | string;
export const SDTacticV31: Schema.Schema<SDTacticV31, SDTacticV31Encoded, never> = Schema.Union(Schema.Literal("T00001", "T00010", "T00020", "T00030", "remarketing"), Schema.String);

export type SDTargetExpressionV31 = Inline169 | Inline170;
export type SDTargetExpressionV31Encoded = Inline169Encoded | Inline170Encoded;
export const SDTargetExpressionV31: Schema.Schema<SDTargetExpressionV31, SDTargetExpressionV31Encoded, never> = Schema.Union(Schema.suspend(() => Inline169), Schema.suspend(() => Inline170));

export type SDTargetExpressionV32 = Inline172 | Inline173 | Inline174;
export type SDTargetExpressionV32Encoded = Inline172Encoded | Inline173Encoded | Inline174Encoded;
export const SDTargetExpressionV32: Schema.Schema<SDTargetExpressionV32, SDTargetExpressionV32Encoded, never> = Schema.Union(Schema.suspend(() => Inline172), Schema.suspend(() => Inline173), Schema.suspend(() => Inline174));

export interface SDTargetingBidRecommendationsRequestV31 {
  readonly products?: ReadonlyArray<Inline176>;
  readonly targetingClauses: ReadonlyArray<Inline177>;
}
export interface SDTargetingBidRecommendationsRequestV31Encoded {
  readonly products?: ReadonlyArray<Inline176Encoded>;
  readonly targetingClauses: ReadonlyArray<Inline177Encoded>;
}
export const SDTargetingBidRecommendationsRequestV31: Schema.Schema<SDTargetingBidRecommendationsRequestV31, SDTargetingBidRecommendationsRequestV31Encoded, never> = Schema.Struct({
  products: Schema.optional(Schema.Array(Schema.suspend(() => Inline176))),
  targetingClauses: Schema.Array(Schema.suspend(() => Inline177)),
});

export interface SDTargetingBidRecommendationsRequestV32 {
  readonly bidOptimization: string;
  readonly costType: string;
  readonly products?: ReadonlyArray<Inline180>;
  readonly targetingClauses: ReadonlyArray<Inline181>;
}
export interface SDTargetingBidRecommendationsRequestV32Encoded {
  readonly bidOptimization: string;
  readonly costType: string;
  readonly products?: ReadonlyArray<Inline180Encoded>;
  readonly targetingClauses: ReadonlyArray<Inline181Encoded>;
}
export const SDTargetingBidRecommendationsRequestV32: Schema.Schema<SDTargetingBidRecommendationsRequestV32, SDTargetingBidRecommendationsRequestV32Encoded, never> = Schema.Struct({
  bidOptimization: Schema.String,
  costType: Schema.String,
  products: Schema.optional(Schema.Array(Schema.suspend(() => Inline180))),
  targetingClauses: Schema.Array(Schema.suspend(() => Inline181)),
});

export interface SDTargetingBidRecommendationsRequestV33 {
  readonly bidOptimization: string;
  readonly costType: string;
  readonly creativeType?: string;
  readonly products?: ReadonlyArray<Inline184>;
  readonly targetingClauses: ReadonlyArray<Inline185>;
}
export interface SDTargetingBidRecommendationsRequestV33Encoded {
  readonly bidOptimization: string;
  readonly costType: string;
  readonly creativeType?: string;
  readonly products?: ReadonlyArray<Inline184Encoded>;
  readonly targetingClauses: ReadonlyArray<Inline185Encoded>;
}
export const SDTargetingBidRecommendationsRequestV33: Schema.Schema<SDTargetingBidRecommendationsRequestV33, SDTargetingBidRecommendationsRequestV33Encoded, never> = Schema.Struct({
  bidOptimization: Schema.String,
  costType: Schema.String,
  creativeType: Schema.optional(Schema.String),
  products: Schema.optional(Schema.Array(Schema.suspend(() => Inline184))),
  targetingClauses: Schema.Array(Schema.suspend(() => Inline185)),
});

export interface SDTargetingBidRecommendationsRequestV34 {
  readonly bidOptimization: string;
  readonly costType: string;
  readonly creativeType?: string;
  readonly products?: ReadonlyArray<Inline188>;
  readonly targetingClauses: ReadonlyArray<Inline189>;
}
export interface SDTargetingBidRecommendationsRequestV34Encoded {
  readonly bidOptimization: string;
  readonly costType: string;
  readonly creativeType?: string;
  readonly products?: ReadonlyArray<Inline188Encoded>;
  readonly targetingClauses: ReadonlyArray<Inline189Encoded>;
}
export const SDTargetingBidRecommendationsRequestV34: Schema.Schema<SDTargetingBidRecommendationsRequestV34, SDTargetingBidRecommendationsRequestV34Encoded, never> = Schema.Struct({
  bidOptimization: Schema.String,
  costType: Schema.String,
  creativeType: Schema.optional(Schema.String),
  products: Schema.optional(Schema.Array(Schema.suspend(() => Inline188))),
  targetingClauses: Schema.Array(Schema.suspend(() => Inline189)),
});

export interface SDTargetingBidRecommendationsResponseItemFailureV31 {
  readonly code: string;
  readonly details: string;
}
export interface SDTargetingBidRecommendationsResponseItemFailureV31Encoded {
  readonly code: string;
  readonly details: string;
}
export const SDTargetingBidRecommendationsResponseItemFailureV31: Schema.Schema<SDTargetingBidRecommendationsResponseItemFailureV31, SDTargetingBidRecommendationsResponseItemFailureV31Encoded, never> = Schema.Struct({
  code: Schema.String,
  details: Schema.String,
});

export interface SDTargetingBidRecommendationsResponseItemSuccessV31 {
  readonly code: string;
  readonly rangeLower?: number;
  readonly rangeUpper?: number;
  readonly recommended?: number;
}
export interface SDTargetingBidRecommendationsResponseItemSuccessV31Encoded {
  readonly code: string;
  readonly rangeLower?: number;
  readonly rangeUpper?: number;
  readonly recommended?: number;
}
export const SDTargetingBidRecommendationsResponseItemSuccessV31: Schema.Schema<SDTargetingBidRecommendationsResponseItemSuccessV31, SDTargetingBidRecommendationsResponseItemSuccessV31Encoded, never> = Schema.Struct({
  code: Schema.String,
  rangeLower: Schema.optional(Schema.Number),
  rangeUpper: Schema.optional(Schema.Number),
  recommended: Schema.optional(Schema.Number),
});

export interface SDTargetingBidRecommendationsResponseV31 {
  readonly bidRecommendations: ReadonlyArray<Inline195 | Inline196>;
  readonly costType: string;
}
export interface SDTargetingBidRecommendationsResponseV31Encoded {
  readonly bidRecommendations: ReadonlyArray<Inline195Encoded | Inline196Encoded>;
  readonly costType: string;
}
export const SDTargetingBidRecommendationsResponseV31: Schema.Schema<SDTargetingBidRecommendationsResponseV31, SDTargetingBidRecommendationsResponseV31Encoded, never> = Schema.Struct({
  bidRecommendations: Schema.Array(Schema.Union(Schema.suspend(() => Inline195), Schema.suspend(() => Inline196))),
  costType: Schema.String,
});

export interface SDTargetingBidRecommendationsResponseV32 {
  readonly bidOptimization: string;
  readonly bidRecommendations: ReadonlyArray<Inline198 | Inline199>;
  readonly costType: string;
}
export interface SDTargetingBidRecommendationsResponseV32Encoded {
  readonly bidOptimization: string;
  readonly bidRecommendations: ReadonlyArray<Inline198Encoded | Inline199Encoded>;
  readonly costType: string;
}
export const SDTargetingBidRecommendationsResponseV32: Schema.Schema<SDTargetingBidRecommendationsResponseV32, SDTargetingBidRecommendationsResponseV32Encoded, never> = Schema.Struct({
  bidOptimization: Schema.String,
  bidRecommendations: Schema.Array(Schema.Union(Schema.suspend(() => Inline198), Schema.suspend(() => Inline199))),
  costType: Schema.String,
});

export interface SDTargetingClauseV31 {
  readonly expression: ReadonlyArray<Inline201 | Inline202>;
  readonly expressionType: string;
}
export interface SDTargetingClauseV31Encoded {
  readonly expression: ReadonlyArray<Inline201Encoded | Inline202Encoded>;
  readonly expressionType: string;
}
export const SDTargetingClauseV31: Schema.Schema<SDTargetingClauseV31, SDTargetingClauseV31Encoded, never> = Schema.Struct({
  expression: Schema.Array(Schema.Union(Schema.suspend(() => Inline201), Schema.suspend(() => Inline202))),
  expressionType: Schema.String,
});

export interface SDTargetingClauseV32 {
  readonly expression: ReadonlyArray<Inline204 | Inline205 | Inline206>;
  readonly expressionType: string;
}
export interface SDTargetingClauseV32Encoded {
  readonly expression: ReadonlyArray<Inline204Encoded | Inline205Encoded | Inline206Encoded>;
  readonly expressionType: string;
}
export const SDTargetingClauseV32: Schema.Schema<SDTargetingClauseV32, SDTargetingClauseV32Encoded, never> = Schema.Struct({
  expression: Schema.Array(Schema.Union(Schema.suspend(() => Inline204), Schema.suspend(() => Inline205), Schema.suspend(() => Inline206))),
  expressionType: Schema.String,
});

export type SDTargetingExpressionV31 = ReadonlyArray<Inline208 | Inline209>;
export type SDTargetingExpressionV31Encoded = ReadonlyArray<Inline208Encoded | Inline209Encoded>;
export const SDTargetingExpressionV31: Schema.Schema<SDTargetingExpressionV31, SDTargetingExpressionV31Encoded, never> = Schema.Array(Schema.Union(Schema.suspend(() => Inline208), Schema.suspend(() => Inline209)));

export type SDTargetingExpressionV32 = ReadonlyArray<Inline211 | Inline212 | Inline213>;
export type SDTargetingExpressionV32Encoded = ReadonlyArray<Inline211Encoded | Inline212Encoded | Inline213Encoded>;
export const SDTargetingExpressionV32: Schema.Schema<SDTargetingExpressionV32, SDTargetingExpressionV32Encoded, never> = Schema.Array(Schema.Union(Schema.suspend(() => Inline211), Schema.suspend(() => Inline212), Schema.suspend(() => Inline213)));

export interface SDTargetingPredicateBaseV31 {
  readonly type: string;
  readonly value?: string;
}
export interface SDTargetingPredicateBaseV31Encoded {
  readonly type: string;
  readonly value?: string;
}
export const SDTargetingPredicateBaseV31: Schema.Schema<SDTargetingPredicateBaseV31, SDTargetingPredicateBaseV31Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.optional(Schema.String),
});

export interface SDTargetingPredicateNestedV31 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline216>;
}
export interface SDTargetingPredicateNestedV31Encoded {
  readonly type: string;
  readonly value: ReadonlyArray<Inline216Encoded>;
}
export const SDTargetingPredicateNestedV31: Schema.Schema<SDTargetingPredicateNestedV31, SDTargetingPredicateNestedV31Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.Array(Schema.suspend(() => Inline216)),
});

export interface SDTargetingPredicateV31 {
  readonly type: string;
  readonly value?: string;
}
export interface SDTargetingPredicateV31Encoded {
  readonly type: string;
  readonly value?: string;
}
export const SDTargetingPredicateV31: Schema.Schema<SDTargetingPredicateV31, SDTargetingPredicateV31Encoded, never> = Schema.Struct({
  type: Schema.String,
  value: Schema.optional(Schema.String),
});

export interface SDTargetingRecommendations {
  readonly products?: ReadonlyArray<Inline219>;
}
export interface SDTargetingRecommendationsEncoded {
  readonly products?: ReadonlyArray<Inline219Encoded>;
}
export const SDTargetingRecommendations: Schema.Schema<SDTargetingRecommendations, SDTargetingRecommendationsEncoded, never> = Schema.Struct({
  products: Schema.optional(Schema.Array(Schema.suspend(() => Inline219))),
});

export interface SDTargetingRecommendationsFailure {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
}
export interface SDTargetingRecommendationsFailureEncoded {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
}
export const SDTargetingRecommendationsFailure: Schema.Schema<SDTargetingRecommendationsFailure, SDTargetingRecommendationsFailureEncoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
});

export interface SDTargetingRecommendationsFailureV34 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline222>;
  readonly name?: string;
}
export interface SDTargetingRecommendationsFailureV34Encoded {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline222Encoded>;
  readonly name?: string;
}
export const SDTargetingRecommendationsFailureV34: Schema.Schema<SDTargetingRecommendationsFailureV34, SDTargetingRecommendationsFailureV34Encoded, never> = Schema.Struct({
  code: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  expression: Schema.optional(Schema.Array(Schema.suspend(() => Inline222))),
  name: Schema.optional(Schema.String),
});

export type SDTargetingRecommendationsProducts = ReadonlyArray<Inline224>;
export type SDTargetingRecommendationsProductsEncoded = ReadonlyArray<Inline224Encoded>;
export const SDTargetingRecommendationsProducts: Schema.Schema<SDTargetingRecommendationsProducts, SDTargetingRecommendationsProductsEncoded, never> = Schema.Array(Schema.suspend(() => Inline224));

export type SDTargetingRecommendationsProductsV31 = ReadonlyArray<Inline226>;
export type SDTargetingRecommendationsProductsV31Encoded = ReadonlyArray<Inline226Encoded>;
export const SDTargetingRecommendationsProductsV31: Schema.Schema<SDTargetingRecommendationsProductsV31, SDTargetingRecommendationsProductsV31Encoded, never> = Schema.Array(Schema.suspend(() => Inline226));

export interface SDTargetingRecommendationsRequest {
  readonly products: ReadonlyArray<Inline228>;
  readonly tactic: string;
  readonly typeFilter: ReadonlyArray<string>;
}
export interface SDTargetingRecommendationsRequestEncoded {
  readonly products: ReadonlyArray<Inline228Encoded>;
  readonly tactic: string;
  readonly typeFilter: ReadonlyArray<string>;
}
export const SDTargetingRecommendationsRequest: Schema.Schema<SDTargetingRecommendationsRequest, SDTargetingRecommendationsRequestEncoded, never> = Schema.Struct({
  products: Schema.Array(Schema.suspend(() => Inline228)),
  tactic: Schema.String,
  typeFilter: Schema.Array(Schema.String),
});

export interface SDTargetingRecommendationsRequestV31 {
  readonly products: ReadonlyArray<Inline230>;
  readonly tactic: string;
  readonly typeFilter: ReadonlyArray<string>;
}
export interface SDTargetingRecommendationsRequestV31Encoded {
  readonly products: ReadonlyArray<Inline230Encoded>;
  readonly tactic: string;
  readonly typeFilter: ReadonlyArray<string>;
}
export const SDTargetingRecommendationsRequestV31: Schema.Schema<SDTargetingRecommendationsRequestV31, SDTargetingRecommendationsRequestV31Encoded, never> = Schema.Struct({
  products: Schema.Array(Schema.suspend(() => Inline230)),
  tactic: Schema.String,
  typeFilter: Schema.Array(Schema.String),
});

export interface SDTargetingRecommendationsRequestV32 {
  readonly products: ReadonlyArray<Inline232>;
  readonly tactic: string;
  readonly themes?: Inline233;
  readonly typeFilter: ReadonlyArray<string>;
}
export interface SDTargetingRecommendationsRequestV32Encoded {
  readonly products: ReadonlyArray<Inline232Encoded>;
  readonly tactic: string;
  readonly themes?: Inline233Encoded;
  readonly typeFilter: ReadonlyArray<string>;
}
export const SDTargetingRecommendationsRequestV32: Schema.Schema<SDTargetingRecommendationsRequestV32, SDTargetingRecommendationsRequestV32Encoded, never> = Schema.Struct({
  products: Schema.Array(Schema.suspend(() => Inline232)),
  tactic: Schema.String,
  themes: Schema.optional(Schema.suspend(() => Inline233)),
  typeFilter: Schema.Array(Schema.String),
});

export interface SDTargetingRecommendationsRequestV33 {
  readonly products: ReadonlyArray<Inline235>;
  readonly tactic: string;
  readonly themes?: Inline236;
  readonly typeFilter: ReadonlyArray<string>;
}
export interface SDTargetingRecommendationsRequestV33Encoded {
  readonly products: ReadonlyArray<Inline235Encoded>;
  readonly tactic: string;
  readonly themes?: Inline236Encoded;
  readonly typeFilter: ReadonlyArray<string>;
}
export const SDTargetingRecommendationsRequestV33: Schema.Schema<SDTargetingRecommendationsRequestV33, SDTargetingRecommendationsRequestV33Encoded, never> = Schema.Struct({
  products: Schema.Array(Schema.suspend(() => Inline235)),
  tactic: Schema.String,
  themes: Schema.optional(Schema.suspend(() => Inline236)),
  typeFilter: Schema.Array(Schema.String),
});

export interface SDTargetingRecommendationsRequestV34 {
  readonly products: ReadonlyArray<Inline238>;
  readonly tactic: string;
  readonly themes?: Inline239;
  readonly typeFilter: ReadonlyArray<string>;
}
export interface SDTargetingRecommendationsRequestV34Encoded {
  readonly products: ReadonlyArray<Inline238Encoded>;
  readonly tactic: string;
  readonly themes?: Inline239Encoded;
  readonly typeFilter: ReadonlyArray<string>;
}
export const SDTargetingRecommendationsRequestV34: Schema.Schema<SDTargetingRecommendationsRequestV34, SDTargetingRecommendationsRequestV34Encoded, never> = Schema.Struct({
  products: Schema.Array(Schema.suspend(() => Inline238)),
  tactic: Schema.String,
  themes: Schema.optional(Schema.suspend(() => Inline239)),
  typeFilter: Schema.Array(Schema.String),
});

export interface SDTargetingRecommendationsRequestV35 {
  readonly categoryType?: string;
  readonly locationExpression?: ReadonlyArray<Inline241>;
  readonly products: ReadonlyArray<Inline242>;
  readonly tactic: string;
  readonly themes?: Inline243;
  readonly typeFilter: ReadonlyArray<string>;
}
export interface SDTargetingRecommendationsRequestV35Encoded {
  readonly categoryType?: string;
  readonly locationExpression?: ReadonlyArray<Inline241Encoded>;
  readonly products: ReadonlyArray<Inline242Encoded>;
  readonly tactic: string;
  readonly themes?: Inline243Encoded;
  readonly typeFilter: ReadonlyArray<string>;
}
export const SDTargetingRecommendationsRequestV35: Schema.Schema<SDTargetingRecommendationsRequestV35, SDTargetingRecommendationsRequestV35Encoded, never> = Schema.Struct({
  categoryType: Schema.optional(Schema.String),
  locationExpression: Schema.optional(Schema.Array(Schema.suspend(() => Inline241))),
  products: Schema.Array(Schema.suspend(() => Inline242)),
  tactic: Schema.String,
  themes: Schema.optional(Schema.suspend(() => Inline243)),
  typeFilter: Schema.Array(Schema.String),
});

export interface SDTargetingRecommendationsResponse {
  readonly recommendations?: Inline245;
}
export interface SDTargetingRecommendationsResponseEncoded {
  readonly recommendations?: Inline245Encoded;
}
export const SDTargetingRecommendationsResponse: Schema.Schema<SDTargetingRecommendationsResponse, SDTargetingRecommendationsResponseEncoded, never> = Schema.Struct({
  recommendations: Schema.optional(Schema.suspend(() => Inline245)),
});

export interface SDTargetingRecommendationsResponseV31 {
  readonly recommendations?: Inline247;
}
export interface SDTargetingRecommendationsResponseV31Encoded {
  readonly recommendations?: Inline247Encoded;
}
export const SDTargetingRecommendationsResponseV31: Schema.Schema<SDTargetingRecommendationsResponseV31, SDTargetingRecommendationsResponseV31Encoded, never> = Schema.Struct({
  recommendations: Schema.optional(Schema.suspend(() => Inline247)),
});

export interface SDTargetingRecommendationsResponseV32 {
  readonly recommendations?: Inline250;
}
export interface SDTargetingRecommendationsResponseV32Encoded {
  readonly recommendations?: Inline250Encoded;
}
export const SDTargetingRecommendationsResponseV32: Schema.Schema<SDTargetingRecommendationsResponseV32, SDTargetingRecommendationsResponseV32Encoded, never> = Schema.Struct({
  recommendations: Schema.optional(Schema.suspend(() => Inline250)),
});

export interface SDTargetingRecommendationsResponseV33 {
  readonly recommendations?: Inline255;
}
export interface SDTargetingRecommendationsResponseV33Encoded {
  readonly recommendations?: Inline255Encoded;
}
export const SDTargetingRecommendationsResponseV33: Schema.Schema<SDTargetingRecommendationsResponseV33, SDTargetingRecommendationsResponseV33Encoded, never> = Schema.Struct({
  recommendations: Schema.optional(Schema.suspend(() => Inline255)),
});

export interface SDTargetingRecommendationsResponseV34 {
  readonly recommendations?: Inline261;
}
export interface SDTargetingRecommendationsResponseV34Encoded {
  readonly recommendations?: Inline261Encoded;
}
export const SDTargetingRecommendationsResponseV34: Schema.Schema<SDTargetingRecommendationsResponseV34, SDTargetingRecommendationsResponseV34Encoded, never> = Schema.Struct({
  recommendations: Schema.optional(Schema.suspend(() => Inline261)),
});

export interface SDTargetingRecommendationsResponseV35 {
  readonly recommendations?: Inline268;
}
export interface SDTargetingRecommendationsResponseV35Encoded {
  readonly recommendations?: Inline268Encoded;
}
export const SDTargetingRecommendationsResponseV35: Schema.Schema<SDTargetingRecommendationsResponseV35, SDTargetingRecommendationsResponseV35Encoded, never> = Schema.Struct({
  recommendations: Schema.optional(Schema.suspend(() => Inline268)),
});

export interface SDTargetingRecommendationsThemes {
  readonly product?: ReadonlyArray<Inline276>;
}
export interface SDTargetingRecommendationsThemesEncoded {
  readonly product?: ReadonlyArray<Inline276Encoded>;
}
export const SDTargetingRecommendationsThemes: Schema.Schema<SDTargetingRecommendationsThemes, SDTargetingRecommendationsThemesEncoded, never> = Schema.Struct({
  product: Schema.optional(Schema.Array(Schema.suspend(() => Inline276))),
});

export type SDTargetingRecommendationsTypeFilterV31 = ReadonlyArray<string>;
export type SDTargetingRecommendationsTypeFilterV31Encoded = ReadonlyArray<string>;
export const SDTargetingRecommendationsTypeFilterV31: Schema.Schema<SDTargetingRecommendationsTypeFilterV31, SDTargetingRecommendationsTypeFilterV31Encoded, never> = Schema.Array(Schema.String);

export type SDTargetingRecommendationsTypeFilterV32 = ReadonlyArray<string>;
export type SDTargetingRecommendationsTypeFilterV32Encoded = ReadonlyArray<string>;
export const SDTargetingRecommendationsTypeFilterV32: Schema.Schema<SDTargetingRecommendationsTypeFilterV32, SDTargetingRecommendationsTypeFilterV32Encoded, never> = Schema.Array(Schema.String);

export type SDTargetingRecommendationsTypeFilterV33 = ReadonlyArray<string>;
export type SDTargetingRecommendationsTypeFilterV33Encoded = ReadonlyArray<string>;
export const SDTargetingRecommendationsTypeFilterV33: Schema.Schema<SDTargetingRecommendationsTypeFilterV33, SDTargetingRecommendationsTypeFilterV33Encoded, never> = Schema.Array(Schema.String);

export interface SDTargetingRecommendationsV31 {
  readonly products?: ReadonlyArray<Inline281>;
  readonly categories?: ReadonlyArray<Inline282>;
}
export interface SDTargetingRecommendationsV31Encoded {
  readonly products?: ReadonlyArray<Inline281Encoded>;
  readonly categories?: ReadonlyArray<Inline282Encoded>;
}
export const SDTargetingRecommendationsV31: Schema.Schema<SDTargetingRecommendationsV31, SDTargetingRecommendationsV31Encoded, never> = Schema.Struct({
  products: Schema.optional(Schema.Array(Schema.suspend(() => Inline281))),
  categories: Schema.optional(Schema.Array(Schema.suspend(() => Inline282))),
});

export interface SDTargetingRecommendationsV32 {
  readonly products?: ReadonlyArray<Inline284>;
  readonly categories?: ReadonlyArray<Inline285>;
  readonly themes?: Inline286;
}
export interface SDTargetingRecommendationsV32Encoded {
  readonly products?: ReadonlyArray<Inline284Encoded>;
  readonly categories?: ReadonlyArray<Inline285Encoded>;
  readonly themes?: Inline286Encoded;
}
export const SDTargetingRecommendationsV32: Schema.Schema<SDTargetingRecommendationsV32, SDTargetingRecommendationsV32Encoded, never> = Schema.Struct({
  products: Schema.optional(Schema.Array(Schema.suspend(() => Inline284))),
  categories: Schema.optional(Schema.Array(Schema.suspend(() => Inline285))),
  themes: Schema.optional(Schema.suspend(() => Inline286)),
});

export interface SDTargetingRecommendationsV33 {
  readonly products?: ReadonlyArray<Inline289>;
  readonly categories?: ReadonlyArray<Inline290>;
  readonly audiences?: ReadonlyArray<Inline291>;
  readonly themes?: Inline292;
}
export interface SDTargetingRecommendationsV33Encoded {
  readonly products?: ReadonlyArray<Inline289Encoded>;
  readonly categories?: ReadonlyArray<Inline290Encoded>;
  readonly audiences?: ReadonlyArray<Inline291Encoded>;
  readonly themes?: Inline292Encoded;
}
export const SDTargetingRecommendationsV33: Schema.Schema<SDTargetingRecommendationsV33, SDTargetingRecommendationsV33Encoded, never> = Schema.Struct({
  products: Schema.optional(Schema.Array(Schema.suspend(() => Inline289))),
  categories: Schema.optional(Schema.Array(Schema.suspend(() => Inline290))),
  audiences: Schema.optional(Schema.Array(Schema.suspend(() => Inline291))),
  themes: Schema.optional(Schema.suspend(() => Inline292)),
});

export interface SDTargetingRecommendationsV34 {
  readonly audiences?: ReadonlyArray<Inline295>;
  readonly categories?: ReadonlyArray<Inline296>;
  readonly products?: ReadonlyArray<Inline297>;
  readonly themes?: Inline298;
}
export interface SDTargetingRecommendationsV34Encoded {
  readonly audiences?: ReadonlyArray<Inline295Encoded>;
  readonly categories?: ReadonlyArray<Inline296Encoded>;
  readonly products?: ReadonlyArray<Inline297Encoded>;
  readonly themes?: Inline298Encoded;
}
export const SDTargetingRecommendationsV34: Schema.Schema<SDTargetingRecommendationsV34, SDTargetingRecommendationsV34Encoded, never> = Schema.Struct({
  audiences: Schema.optional(Schema.Array(Schema.suspend(() => Inline295))),
  categories: Schema.optional(Schema.Array(Schema.suspend(() => Inline296))),
  products: Schema.optional(Schema.Array(Schema.suspend(() => Inline297))),
  themes: Schema.optional(Schema.suspend(() => Inline298)),
});

export interface SDTargetingRecommendationsV35 {
  readonly audiences?: ReadonlyArray<Inline302>;
  readonly categories?: ReadonlyArray<Inline303>;
  readonly contentCategories?: ReadonlyArray<Inline304>;
  readonly products?: ReadonlyArray<Inline305>;
  readonly themes?: Inline306;
}
export interface SDTargetingRecommendationsV35Encoded {
  readonly audiences?: ReadonlyArray<Inline302Encoded>;
  readonly categories?: ReadonlyArray<Inline303Encoded>;
  readonly contentCategories?: ReadonlyArray<Inline304Encoded>;
  readonly products?: ReadonlyArray<Inline305Encoded>;
  readonly themes?: Inline306Encoded;
}
export const SDTargetingRecommendationsV35: Schema.Schema<SDTargetingRecommendationsV35, SDTargetingRecommendationsV35Encoded, never> = Schema.Struct({
  audiences: Schema.optional(Schema.Array(Schema.suspend(() => Inline302))),
  categories: Schema.optional(Schema.Array(Schema.suspend(() => Inline303))),
  contentCategories: Schema.optional(Schema.Array(Schema.suspend(() => Inline304))),
  products: Schema.optional(Schema.Array(Schema.suspend(() => Inline305))),
  themes: Schema.optional(Schema.suspend(() => Inline306)),
});

export interface SDThemeRecommendations {
  readonly products?: ReadonlyArray<Inline310 | Inline311>;
}
export interface SDThemeRecommendationsEncoded {
  readonly products?: ReadonlyArray<Inline310Encoded | Inline311Encoded>;
}
export const SDThemeRecommendations: Schema.Schema<SDThemeRecommendations, SDThemeRecommendationsEncoded, never> = Schema.Struct({
  products: Schema.optional(Schema.Array(Schema.Union(Schema.suspend(() => Inline310), Schema.suspend(() => Inline311)))),
});

export interface SDThemeRecommendationsV34 {
  readonly products?: ReadonlyArray<Inline313 | Inline315>;
}
export interface SDThemeRecommendationsV34Encoded {
  readonly products?: ReadonlyArray<Inline313Encoded | Inline315Encoded>;
}
export const SDThemeRecommendationsV34: Schema.Schema<SDThemeRecommendationsV34, SDThemeRecommendationsV34Encoded, never> = Schema.Struct({
  products: Schema.optional(Schema.Array(Schema.Union(Schema.suspend(() => Inline313), Schema.suspend(() => Inline315)))),
});

export interface SnapshotRequest {
  readonly stateFilter?: string;
  readonly tacticFilter?: string;
}
export interface SnapshotRequestEncoded {
  readonly stateFilter?: string;
  readonly tacticFilter?: string;
}
export const SnapshotRequest: Schema.Schema<SnapshotRequest, SnapshotRequestEncoded, never> = Schema.Struct({
  stateFilter: Schema.optional(Schema.String),
  tacticFilter: Schema.optional(Schema.String),
});

export interface SnapshotResponse {
  readonly expiration?: number;
  readonly fileSize?: number;
  readonly location?: string;
  readonly recordType?: string;
  readonly snapshotId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
}
export interface SnapshotResponseEncoded {
  readonly expiration?: number;
  readonly fileSize?: number;
  readonly location?: string;
  readonly recordType?: string;
  readonly snapshotId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
}
export const SnapshotResponse: Schema.Schema<SnapshotResponse, SnapshotResponseEncoded, never> = Schema.Struct({
  expiration: Schema.optional(Schema.Number),
  fileSize: Schema.optional(Schema.Number),
  location: Schema.optional(Schema.String),
  recordType: Schema.optional(Schema.String),
  snapshotId: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  statusDetails: Schema.optional(Schema.String),
});

export type state = "ACTIVE" | "PAUSED" | string;
export type stateEncoded = "ACTIVE" | "PAUSED" | string;
export const state: Schema.Schema<state, stateEncoded, never> = Schema.Union(Schema.Literal("ACTIVE", "PAUSED"), Schema.String);

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

export interface UpdateBudgetRulesForSDCampaignsParams {
  readonly budgetRulesDetails?: ReadonlyArray<Inline366>;
}
export interface UpdateBudgetRulesForSDCampaignsParamsEncoded {
  readonly budgetRulesDetails?: ReadonlyArray<Inline366Encoded>;
}
export const UpdateBudgetRulesForSDCampaignsParams: Schema.Schema<UpdateBudgetRulesForSDCampaignsParams, UpdateBudgetRulesForSDCampaignsParamsEncoded, never> = Schema.Struct({
  budgetRulesDetails: Schema.optional(Schema.Array(Schema.suspend(() => Inline366))),
});

export interface UpdateBudgetRulesForSDCampaignsResponse {

}
export interface UpdateBudgetRulesForSDCampaignsResponseEncoded {

}
export const UpdateBudgetRulesForSDCampaignsResponse: Schema.Schema<UpdateBudgetRulesForSDCampaignsResponse, UpdateBudgetRulesForSDCampaignsResponseEncoded, never> = Schema.Struct({

});

export interface UpdateBudgetRulesResponse {
  readonly responses?: ReadonlyArray<Inline321>;
}
export interface UpdateBudgetRulesResponseEncoded {
  readonly responses?: ReadonlyArray<Inline321Encoded>;
}
export const UpdateBudgetRulesResponse: Schema.Schema<UpdateBudgetRulesResponse, UpdateBudgetRulesResponseEncoded, never> = Schema.Struct({
  responses: Schema.optional(Schema.Array(Schema.suspend(() => Inline321))),
});

export interface UpdateSDBudgetRulesRequest {
  readonly budgetRulesDetails?: ReadonlyArray<Inline323>;
}
export interface UpdateSDBudgetRulesRequestEncoded {
  readonly budgetRulesDetails?: ReadonlyArray<Inline323Encoded>;
}
export const UpdateSDBudgetRulesRequest: Schema.Schema<UpdateSDBudgetRulesRequest, UpdateSDBudgetRulesRequestEncoded, never> = Schema.Struct({
  budgetRulesDetails: Schema.optional(Schema.Array(Schema.suspend(() => Inline323))),
});
