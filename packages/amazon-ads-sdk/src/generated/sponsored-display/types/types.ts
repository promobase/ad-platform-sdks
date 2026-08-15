// @generated
// fingerprint: sha256:a9c49576855d6a46f22e7ba31c1623f602644db0810bdf88e8b7dcf0cf4a8aee
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.

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

export type BudgetChangeType = "PERCENT" | string;

export interface budgetIncreaseBy {
  readonly type: string;
  readonly value: number;
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
  readonly error?: ReadonlyArray<Inline9>;
  readonly success?: ReadonlyArray<Inline10>;
}

export interface BudgetUsageError {
  readonly code?: string;
  readonly details?: string;
}

export type ComparisonOperator = "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | string;

export interface CreateAssociatedBudgetRulesForSDCampaignsParams {
  readonly campaignId: number;
  readonly budgetRuleIds?: ReadonlyArray<string>;
}

export interface CreateAssociatedBudgetRulesForSDCampaignsResponse {

}

export interface CreateAssociatedBudgetRulesRequest {
  readonly budgetRuleIds?: ReadonlyArray<string>;
}

export interface CreateAssociatedBudgetRulesResponse {
  readonly responses?: ReadonlyArray<Inline15>;
}

export interface CreateBrandSafetyDenyListDomainsParams {
  readonly domains: ReadonlyArray<Inline345>;
}

export interface CreateBrandSafetyDenyListDomainsResponse {
  readonly data: Inline347;
}

export interface CreateBudgetRulesForSDCampaignsParams {
  readonly budgetRulesDetails?: ReadonlyArray<Inline354>;
}

export interface CreateBudgetRulesForSDCampaignsResponse {

}

export interface CreateBudgetRulesResponse {
  readonly responses?: ReadonlyArray<Inline17>;
}

export interface CreateSDBudgetRulesRequest {
  readonly budgetRulesDetails?: ReadonlyArray<Inline19>;
}

export interface CreateSnapshotParams {
  readonly recordType: string;
  readonly stateFilter?: string;
  readonly tacticFilter?: string;
}

export interface CreateSnapshotResponse {
  readonly data: Inline330;
}

export interface DateRangeTypeRuleDuration {
  readonly endDate?: string;
  readonly startDate: string;
}

export type DayOfWeek = "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY" | string;

export interface DeleteBrandSafetyDenyListParams {

}

export interface DeleteBrandSafetyDenyListResponse {
  readonly data: Inline339;
}

export interface DisassociateAssociatedBudgetRuleForSDCampaignsParams {
  readonly campaignId: number;
  readonly budgetRuleId: string;
}

export interface DisassociateAssociatedBudgetRuleForSDCampaignsResponse {
  readonly data: Inline398;
}

export interface DisassociateAssociatedBudgetRuleResponse {

}

export interface DownloadSnapshotByIdParams {
  readonly snapshotId: string;
}

export interface DownloadSnapshotByIdResponse {
  readonly data: Inline411;
}

export interface EventTypeRuleDuration {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface GetBudgetRuleByRuleIdForSDCampaignsParams {
  readonly budgetRuleId: string;
}

export interface GetBudgetRuleByRuleIdForSDCampaignsResponse {
  readonly data: Inline379;
}

export interface GetCampaignsAssociatedWithSDBudgetRuleParams {
  readonly budgetRuleId: string;
  readonly nextToken?: string;
  readonly pageSize: number;
}

export interface GetCampaignsAssociatedWithSDBudgetRuleResponse {
  readonly data: Inline386;
}

export interface GetHeadlineRecommendationsForSDParams {
  readonly adFormat?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly maxNumRecommendations?: number;
}

export interface GetHeadlineRecommendationsForSDResponse {
  readonly data: Inline405;
}

export interface GetRequestResultsParams {
  readonly requestId: string;
  readonly startIndex?: number;
  readonly count?: number;
}

export interface GetRequestResultsResponse {
  readonly data: Inline333;
}

export interface GetRequestStatusParams {
  readonly requestId: string;
}

export interface GetRequestStatusResponse {
  readonly data: Inline336;
}

export interface GetSDBudgetRecommendationsParams {
  readonly campaignIds: ReadonlyArray<string>;
}

export interface GetSDBudgetRecommendationsResponse {

}

export interface GetSDBudgetRuleResponse {
  readonly budgetRule?: Inline29;
}

export interface GetSDBudgetRulesForAdvertiserParams {
  readonly nextToken?: string;
  readonly pageSize: number;
}

export interface GetSDBudgetRulesForAdvertiserResponse {
  readonly budgetRulesForAdvertiserResponse?: ReadonlyArray<Inline35>;
  readonly nextToken?: string;
}

export interface GetSnapshotByIdParams {
  readonly snapshotId: string;
}

export interface GetSnapshotByIdResponse {
  readonly data: Inline408;
}

export interface GetTargetBidRecommendationsParams {
  readonly products?: ReadonlyArray<Inline413>;
  readonly targetingClauses: ReadonlyArray<Inline414>;
}

export interface GetTargetBidRecommendationsResponse {

}

export interface GetTargetRecommendationsParams {
  readonly locale?: string;
  readonly products: ReadonlyArray<Inline421>;
  readonly tactic: string;
  readonly typeFilter: ReadonlyArray<string>;
}

export interface GetTargetRecommendationsResponse {
  readonly data: Inline423;
}

export interface Inline10 {
  readonly budget?: number;
  readonly budgetUsagePercent?: number;
  readonly campaignId?: string;
  readonly index?: number;
  readonly usageUpdatedTimestamp?: string;
}

export interface Inline100 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline101 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline101>;
  readonly type?: string;
}

export interface Inline104 {
  readonly rangeLower?: number;
  readonly rangeUpper?: number;
}

export interface Inline106 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline106;
}

export interface Inline108 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline108;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}

export interface Inline110 {
  readonly rangeLower?: number;
  readonly rangeUpper?: number;
}

export interface Inline119 {
  readonly campaignId: string;
  readonly campaignName: string;
  readonly ruleStatus: string;
}

export interface Inline128 {
  readonly headline?: string;
  readonly headlineId?: string;
}

export interface Inline133 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline133;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface Inline134 {
  readonly dateRangeTypeRuleDuration?: Inline134;
  readonly eventTypeRuleDuration?: Inline135;
}

export interface Inline135 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline136 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline137 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline137>;
  readonly type?: string;
}

export interface Inline141 {
  readonly asin?: string;
  readonly rank?: number;
}

export interface Inline143 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}

export interface Inline146 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}

export interface Inline148 {
  readonly type: string;
}

export interface Inline149 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}

export interface Inline15 {
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}

export interface Inline151 {
  readonly type: string;
}

export interface Inline154 {
  readonly code?: string;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline154>;
}

export interface Inline155 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
}

export interface Inline157 {
  readonly code?: string;
  readonly expression?: ReadonlyArray<Inline157>;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline158>;
}

export interface Inline158 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}

export interface Inline159 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline159>;
  readonly name?: string;
}

export interface Inline169 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline17 {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}

export interface Inline170 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline170>;
}

export interface Inline172 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline173 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline173>;
}

export interface Inline174 {
  readonly type: string;
  readonly value: string;
}

export interface Inline176 {
  readonly asin: string;
}

export interface Inline177 {
  readonly targetingClause: Inline177;
}

export interface Inline178 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline178>;
}

export interface Inline180 {
  readonly asin: string;
}

export interface Inline181 {
  readonly targetingClause: Inline181;
}

export interface Inline182 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline182>;
}

export interface Inline184 {
  readonly asin: string;
}

export interface Inline185 {
  readonly targetingClause: Inline185;
}

export interface Inline186 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline186>;
}

export interface Inline188 {
  readonly asin: string;
}

export interface Inline189 {
  readonly targetingClause: Inline189;
}

export interface Inline19 {
  readonly budgetIncreaseBy?: Inline19;
  readonly duration?: Inline20;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline22;
  readonly recurrence?: Inline23;
  readonly ruleType?: string;
}

export interface Inline190 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline190>;
}

export interface Inline191 {
  readonly type: string;
  readonly value: string;
}

export interface Inline195 {
  readonly code: string;
  readonly rangeLower?: number;
  readonly rangeUpper?: number;
  readonly recommended?: number;
}

export interface Inline196 {
  readonly code: string;
  readonly details: string;
}

export interface Inline198 {
  readonly code: string;
  readonly rangeLower?: number;
  readonly rangeUpper?: number;
  readonly recommended?: number;
}

export interface Inline199 {
  readonly code: string;
  readonly details: string;
}

export interface Inline20 {
  readonly dateRangeTypeRuleDuration?: Inline20;
  readonly eventTypeRuleDuration?: Inline21;
}

export interface Inline201 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline202 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline202>;
}

export interface Inline204 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline205 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline205>;
}

export interface Inline206 {
  readonly type: string;
  readonly value: string;
}

export interface Inline208 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline209 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline209>;
}

export interface Inline21 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline211 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline212 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline212>;
}

export interface Inline213 {
  readonly type: string;
  readonly value: string;
}

export interface Inline216 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline219 {
  readonly asin?: string;
  readonly rank?: number;
}

export interface Inline22 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline222 {
  readonly type: string;
}

export interface Inline224 {
  readonly asin: string;
}

export interface Inline226 {
  readonly asin?: string;
  readonly landingPageType?: string;
  readonly landingPageURL?: string;
}

export interface Inline228 {
  readonly asin: string;
}

export interface Inline23 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline23>;
  readonly type?: string;
}

export interface Inline230 {
  readonly asin: string;
}

export interface Inline232 {
  readonly asin: string;
}

export interface Inline233 {
  readonly product?: ReadonlyArray<Inline233>;
}

export interface Inline235 {
  readonly asin: string;
}

export interface Inline236 {
  readonly product?: ReadonlyArray<Inline236>;
}

export interface Inline238 {
  readonly asin: string;
}

export interface Inline239 {
  readonly product?: ReadonlyArray<Inline239>;
}

export interface Inline241 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline242 {
  readonly asin?: string;
  readonly landingPageType?: string;
  readonly landingPageURL?: string;
}

export interface Inline243 {
  readonly product?: ReadonlyArray<Inline243>;
}

export interface Inline245 {
  readonly products?: ReadonlyArray<Inline245>;
}

export interface Inline247 {
  readonly products?: ReadonlyArray<Inline247>;
  readonly categories?: ReadonlyArray<Inline248>;
}

export interface Inline248 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline248;
}

export interface Inline250 {
  readonly products?: ReadonlyArray<Inline250>;
  readonly categories?: ReadonlyArray<Inline251>;
  readonly themes?: Inline252;
}

export interface Inline251 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline251;
}

export interface Inline252 {
  readonly products?: ReadonlyArray<Inline252 | Inline253>;
}

export interface Inline253 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
}

export interface Inline255 {
  readonly products?: ReadonlyArray<Inline255>;
  readonly categories?: ReadonlyArray<Inline256>;
  readonly audiences?: ReadonlyArray<Inline257>;
  readonly themes?: Inline258;
}

export interface Inline256 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline256;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}

export interface Inline257 {
  readonly audiences?: ReadonlyArray<Inline257>;
  readonly category?: string;
}

export interface Inline258 {
  readonly products?: ReadonlyArray<Inline258 | Inline259>;
}

export interface Inline259 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
}

export interface Inline261 {
  readonly audiences?: ReadonlyArray<Inline261>;
  readonly categories?: ReadonlyArray<Inline262>;
  readonly products?: ReadonlyArray<Inline263>;
  readonly themes?: Inline264;
}

export interface Inline262 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline262;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}

export interface Inline263 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}

export interface Inline264 {
  readonly products?: ReadonlyArray<Inline264 | Inline266>;
}

export interface Inline265 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}

export interface Inline266 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline266>;
  readonly name?: string;
}

export interface Inline268 {
  readonly audiences?: ReadonlyArray<Inline268>;
  readonly categories?: ReadonlyArray<Inline269>;
  readonly contentCategories?: ReadonlyArray<Inline270>;
  readonly products?: ReadonlyArray<Inline271>;
  readonly themes?: Inline272;
}

export interface Inline269 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline269;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}

export interface Inline270 {
  readonly contentCategory?: string;
  readonly name?: string;
  readonly rank?: number;
}

export interface Inline271 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}

export interface Inline272 {
  readonly products?: ReadonlyArray<Inline272 | Inline274>;
}

export interface Inline273 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}

export interface Inline274 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline274>;
  readonly name?: string;
}

export interface Inline276 {
  readonly expression: ReadonlyArray<Inline276>;
  readonly name: string;
}

export interface Inline281 {
  readonly asin?: string;
  readonly rank?: number;
}

export interface Inline282 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline282;
}

export interface Inline284 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}

export interface Inline285 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline285;
}

export interface Inline286 {
  readonly products?: ReadonlyArray<Inline286 | Inline287>;
}

export interface Inline287 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
}

export interface Inline289 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}

export interface Inline29 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline29;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface Inline290 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline290;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}

export interface Inline291 {
  readonly audiences?: ReadonlyArray<Inline291>;
  readonly category?: string;
}

export interface Inline292 {
  readonly products?: ReadonlyArray<Inline292 | Inline293>;
}

export interface Inline293 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
}

export interface Inline295 {
  readonly audiences?: ReadonlyArray<Inline295>;
  readonly category?: string;
}

export interface Inline296 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline296;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}

export interface Inline297 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}

export interface Inline298 {
  readonly products?: ReadonlyArray<Inline298 | Inline300>;
}

export interface Inline299 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}

export interface Inline30 {
  readonly dateRangeTypeRuleDuration?: Inline30;
  readonly eventTypeRuleDuration?: Inline31;
}

export interface Inline300 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline300>;
  readonly name?: string;
}

export interface Inline302 {
  readonly audiences?: ReadonlyArray<Inline302>;
  readonly category?: string;
}

export interface Inline303 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline303;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}

export interface Inline304 {
  readonly contentCategory?: string;
  readonly name?: string;
  readonly rank?: number;
}

export interface Inline305 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}

export interface Inline306 {
  readonly products?: ReadonlyArray<Inline306 | Inline308>;
}

export interface Inline307 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}

export interface Inline308 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline308>;
  readonly name?: string;
}

export interface Inline31 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline310 {
  readonly code?: string;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline310>;
}

export interface Inline311 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
}

export interface Inline313 {
  readonly code?: string;
  readonly expression?: ReadonlyArray<Inline313>;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline314>;
}

export interface Inline314 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}

export interface Inline315 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline315>;
  readonly name?: string;
}

export interface Inline32 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline321 {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}

export interface Inline323 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline323;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface Inline324 {
  readonly dateRangeTypeRuleDuration?: Inline324;
  readonly eventTypeRuleDuration?: Inline325;
}

export interface Inline325 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline326 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline327 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline327>;
  readonly type?: string;
}

export interface Inline33 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline33>;
  readonly type?: string;
}

export interface Inline330 {
  readonly expiration?: number;
  readonly fileSize?: number;
  readonly location?: string;
  readonly recordType?: string;
  readonly snapshotId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
}

export interface Inline333 {
  readonly results?: ReadonlyArray<Inline333>;
}

export interface Inline336 {
  readonly requestStatus?: Inline336;
}

export interface Inline339 {
  readonly requestId?: string;
}

export interface Inline342 {
  readonly domains?: ReadonlyArray<Inline342>;
  readonly pagination?: Inline343;
}

export interface Inline343 {
  readonly limit?: number;
  readonly offset?: number;
  readonly total?: number;
}

export interface Inline345 {
  readonly name: string;
  readonly type: string;
}

export interface Inline347 {
  readonly requestId?: string;
}

export interface Inline349 {
  readonly name: string;
  readonly type: string;
}

export interface Inline35 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline35;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface Inline351 {
  readonly requestStatusList?: ReadonlyArray<Inline351>;
}

export interface Inline354 {
  readonly budgetIncreaseBy?: Inline354;
  readonly duration?: Inline355;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline357;
  readonly recurrence?: Inline358;
  readonly ruleType?: string;
}

export interface Inline355 {
  readonly dateRangeTypeRuleDuration?: Inline355;
  readonly eventTypeRuleDuration?: Inline356;
}

export interface Inline356 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline357 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline358 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline358>;
  readonly type?: string;
}

export interface Inline36 {
  readonly dateRangeTypeRuleDuration?: Inline36;
  readonly eventTypeRuleDuration?: Inline37;
}

export interface Inline361 {
  readonly budgetIncreaseBy?: Inline361;
  readonly duration?: Inline362;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline364;
  readonly recurrence?: Inline365;
  readonly ruleType?: string;
}

export interface Inline362 {
  readonly dateRangeTypeRuleDuration?: Inline362;
  readonly eventTypeRuleDuration?: Inline363;
}

export interface Inline363 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline364 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline365 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline365>;
  readonly type?: string;
}

export interface Inline366 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline366;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface Inline367 {
  readonly dateRangeTypeRuleDuration?: Inline367;
  readonly eventTypeRuleDuration?: Inline368;
}

export interface Inline368 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline369 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline37 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline370 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline370>;
  readonly type?: string;
}

export interface Inline373 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline373;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface Inline374 {
  readonly dateRangeTypeRuleDuration?: Inline374;
  readonly eventTypeRuleDuration?: Inline375;
}

export interface Inline375 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline376 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline377 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline377>;
  readonly type?: string;
}

export interface Inline379 {
  readonly budgetRule?: Inline379;
}

export interface Inline38 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline380 {
  readonly dateRangeTypeRuleDuration?: Inline380;
  readonly eventTypeRuleDuration?: Inline381;
}

export interface Inline381 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline382 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline383 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline383>;
  readonly type?: string;
}

export interface Inline386 {
  readonly associatedCampaigns?: ReadonlyArray<Inline386>;
  readonly nextToken?: string;
}

export interface Inline389 {
  readonly associatedRules?: ReadonlyArray<Inline389>;
}

export interface Inline39 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline39>;
  readonly type?: string;
}

export interface Inline390 {
  readonly dateRangeTypeRuleDuration?: Inline390;
  readonly eventTypeRuleDuration?: Inline391;
}

export interface Inline391 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline392 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline393 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline393>;
  readonly type?: string;
}

export interface Inline398 {

}

export interface Inline405 {
  readonly recommendations?: ReadonlyArray<Inline405>;
  readonly requestId?: string;
}

export interface Inline408 {
  readonly expiration?: number;
  readonly fileSize?: number;
  readonly location?: string;
  readonly recordType?: string;
  readonly snapshotId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
}

export interface Inline411 {
  readonly expiration?: number;
  readonly fileSize?: number;
  readonly location?: string;
  readonly recordType?: string;
  readonly snapshotId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
}

export interface Inline413 {
  readonly asin: string;
}

export interface Inline414 {
  readonly targetingClause: Inline414;
}

export interface Inline415 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline415>;
}

export interface Inline418 {
  readonly asin: string;
}

export interface Inline419 {
  readonly targetingClause: Inline419;
}

export interface Inline420 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline420>;
}

export interface Inline421 {
  readonly asin: string;
}

export interface Inline423 {
  readonly recommendations?: Inline423;
}

export interface Inline425 {
  readonly asin: string;
}

export interface Inline46 {
  readonly endTime?: string;
  readonly startTime?: string;
}

export interface Inline49 {
  readonly endDate?: string;
  readonly startDate: string;
}

export interface Inline50 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline57 {
  readonly audience?: string;
  readonly name?: string;
  readonly rank?: number;
}

export interface Inline60 {
  readonly audiences?: ReadonlyArray<Inline60>;
  readonly category?: string;
}

export interface Inline69 {
  readonly createdAt?: string;
  readonly domainId?: number;
  readonly lastModified?: string;
  readonly name?: string;
  readonly state?: string;
  readonly type?: string;
}

export interface Inline70 {
  readonly limit?: number;
  readonly offset?: number;
  readonly total?: number;
}

export interface Inline73 {
  readonly requestId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
  readonly timestamp?: string;
}

export interface Inline75 {
  readonly name: string;
  readonly type: string;
}

export interface Inline78 {
  readonly details?: string;
  readonly domainId?: number;
  readonly name?: string;
  readonly status?: string;
}

export interface Inline81 {
  readonly requestId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
  readonly timestamp?: string;
}

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

export interface Inline88 {
  readonly campaignId: string;
  readonly code: string;
  readonly details: string;
  readonly index: number;
}

export interface Inline89 {
  readonly campaignId: string;
  readonly index: number;
  readonly sevenDaysMissedOpportunities: Inline89;
  readonly suggestedBudget: number;
}

export interface Inline9 {
  readonly campaignId?: string;
  readonly code?: string;
  readonly details?: string;
  readonly index?: number;
}

export interface Inline91 {
  readonly budgetIncreaseBy?: Inline91;
  readonly duration?: Inline92;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline94;
  readonly recurrence?: Inline95;
  readonly ruleType?: string;
}

export interface Inline92 {
  readonly dateRangeTypeRuleDuration?: Inline92;
  readonly eventTypeRuleDuration?: Inline93;
}

export interface Inline93 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline94 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline95 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline95>;
  readonly type?: string;
}

export interface Inline97 {
  readonly type: string;
  readonly value: number;
}

export interface Inline98 {
  readonly dateRangeTypeRuleDuration?: Inline98;
  readonly eventTypeRuleDuration?: Inline99;
}

export interface Inline99 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface ListAssociatedBudgetRulesForSDCampaignsParams {
  readonly campaignId: number;
}

export interface ListAssociatedBudgetRulesForSDCampaignsResponse {
  readonly data: Inline389;
}

export interface ListDomainsParams {
  readonly startIndex?: number;
  readonly count?: number;
}

export interface ListDomainsResponse {
  readonly data: Inline342;
}

export interface ListRequestStatusParams {

}

export interface ListRequestStatusResponse {
  readonly data: Inline351;
}

export interface LocationExpression {
  readonly type?: string;
  readonly value?: string;
}

export type LocationPredicate = "location" | string;

export interface PerformanceMeasureCondition {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export type PerformanceMetric = "ACOS" | "CTR" | "CVR" | "ROAS" | string;

export interface RecommendedHeadline {
  readonly headline?: string;
  readonly headlineId?: string;
}

export interface Recurrence {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline46>;
  readonly type?: string;
}

export type RecurrenceType = "DAILY" | "WEEKLY" | string;

export interface RuleDuration {
  readonly dateRangeTypeRuleDuration?: Inline49;
  readonly eventTypeRuleDuration?: Inline50;
}

export interface SDAdvertisedProduct {
  readonly asin?: string;
  readonly landingPageType?: string;
  readonly landingPageURL?: string;
}

export interface SDAPIError {
  readonly code?: string;
  readonly details?: string;
}

export type SDASIN = string;

export type SDAudience = string;

export type SDAudienceCategory = "In-market" | "Interest" | "Life event" | "Lifestyle" | string;

export interface SDAudienceCategoryRecommendations {
  readonly audiences?: ReadonlyArray<Inline57>;
  readonly category?: string;
}

export interface SDAudienceRecommendation {
  readonly audience?: string;
  readonly name?: string;
  readonly rank?: number;
}

export interface SDAudienceRecommendations {
  readonly audiences?: ReadonlyArray<Inline60>;
}

export type SDBidOptimizationV32 = "clicks" | "conversions" | "reach" | string;

export interface SDBidRecommendationV31 {
  readonly rangeLower: number;
  readonly rangeUpper: number;
  readonly recommended: number;
}

export interface SDBrandSafetyDenyListDomain {
  readonly name: string;
  readonly type: string;
}

export type SDBrandSafetyDenyListDomainState = "ARCHIVED" | "ENABLED" | string;

export type SDBrandSafetyDenyListDomainType = "APP" | "CREATOR" | "WEBSITE" | string;

export type SDBrandSafetyDenyListDomainUpdateResultStatus = "FAILURE" | "SUCCESS" | string;

export interface SDBrandSafetyDenyListProcessedDomain {
  readonly createdAt?: string;
  readonly domainId?: number;
  readonly lastModified?: string;
  readonly name?: string;
  readonly state?: string;
  readonly type?: string;
}

export interface SDBrandSafetyGetResponse {
  readonly domains?: ReadonlyArray<Inline69>;
  readonly pagination?: Inline70;
}

export interface SDBrandSafetyGetResponsePagination {
  readonly limit?: number;
  readonly offset?: number;
  readonly total?: number;
}

export interface SDBrandSafetyListRequestStatusResponse {
  readonly requestStatusList?: ReadonlyArray<Inline73>;
}

export interface SDBrandSafetyPostRequest {
  readonly domains: ReadonlyArray<Inline75>;
}

export interface SDBrandSafetyRequestResult {
  readonly details?: string;
  readonly domainId?: number;
  readonly name?: string;
  readonly status?: string;
}

export interface SDBrandSafetyRequestResultsResponse {
  readonly results?: ReadonlyArray<Inline78>;
}

export interface SDBrandSafetyRequestStatus {
  readonly requestId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
  readonly timestamp?: string;
}

export interface SDBrandSafetyRequestStatusResponse {
  readonly requestStatus?: Inline81;
}

export interface SDBrandSafetyUpdateResponse {
  readonly requestId?: string;
}

export interface SDBudgetRecommendation {
  readonly campaignId: string;
  readonly index: number;
  readonly sevenDaysMissedOpportunities: Inline84;
  readonly suggestedBudget: number;
}

export interface SDBudgetRecommendationError {
  readonly campaignId: string;
  readonly code: string;
  readonly details: string;
  readonly index: number;
}

export interface SDBudgetRecommendationsRequest {
  readonly campaignIds: ReadonlyArray<string>;
}

export interface SDBudgetRecommendationsResponse {
  readonly budgetRecommendationsErrorResults: ReadonlyArray<Inline88>;
  readonly budgetRecommendationsSuccessResults: ReadonlyArray<Inline89>;
}

export interface SDBudgetRule {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline91;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface SDBudgetRuleDetails {
  readonly budgetIncreaseBy?: Inline97;
  readonly duration?: Inline98;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline100;
  readonly recurrence?: Inline101;
  readonly ruleType?: string;
}

export interface SdCampaignsBudgetUsageParams {
  readonly campaignIds?: ReadonlyArray<string>;
}

export interface SdCampaignsBudgetUsageResponse {

}

export type SDCategory = number;

export interface SDCategoryRecommendation {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline104;
}

export interface SDCategoryRecommendations {
  readonly categories?: ReadonlyArray<Inline106>;
}

export interface SDCategoryRecommendationsV33 {
  readonly categories?: ReadonlyArray<Inline108>;
}

export interface SDCategoryRecommendationV33 {
  readonly category?: number;
  readonly name?: string;
  readonly path?: ReadonlyArray<string>;
  readonly rank?: number;
  readonly targetableAsinCountRange?: Inline110;
  readonly translatedName?: string;
  readonly translatedPath?: ReadonlyArray<string>;
}

export type SDContentCategory = string;

export interface SDContentCategoryRecommendations {
  readonly contentCategory?: string;
  readonly name?: string;
  readonly rank?: number;
}

export interface SDContentTargetingPredicateV31 {
  readonly type: string;
  readonly value: string;
}

export type SDCostTypeV31 = "cpc" | "vcpm" | string;

export type SDCreativeType = "IMAGE" | "VIDEO" | string;

export interface SdDefaultError {
  readonly code?: string;
  readonly details?: string;
}

export interface SDErrorResponse {
  readonly code?: string;
  readonly details?: string;
}

export interface SDGetAssociatedCampaignsResponse {
  readonly associatedCampaigns?: ReadonlyArray<Inline119>;
  readonly nextToken?: string;
}

export interface SDGoalProduct {
  readonly asin: string;
}

export interface SDHeadlineRecommendationAccessDeniedException {
  readonly code?: string;
  readonly details?: string;
}

export interface SDHeadlineRecommendationIdentifierNotfoundException {
  readonly code?: string;
  readonly details?: string;
}

export interface SDHeadlineRecommendationInternalServerException {
  readonly code?: string;
  readonly details?: string;
}

export interface SDHeadlineRecommendationMarsThrottlingException {
  readonly code?: string;
  readonly details?: string;
}

export interface SDHeadlineRecommendationNotAcceptableException {
  readonly code?: string;
  readonly details?: string;
}

export interface SDHeadlineRecommendationRequest {
  readonly adFormat?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly maxNumRecommendations?: number;
}

export interface SDHeadlineRecommendationResponse {
  readonly recommendations?: ReadonlyArray<Inline128>;
  readonly requestId?: string;
}

export interface SDHeadlineRecommendationSchemaValidationException {
  readonly code?: string;
  readonly details?: string;
}

export type SDLandingPageType = "OFF_AMAZON_LINK" | string;

export type SDLandingPageURL = string;

export interface SDListAssociatedBudgetRulesResponse {
  readonly associatedRules?: ReadonlyArray<Inline133>;
}

export type SDLocale = "ar_AE" | "de_DE" | "en_AE" | "en_AU" | "en_CA" | "en_GB" | "en_IN" | "en_SG" | "en_US" | "es_ES" | "es_MX" | "fr_CA" | "fr_FR" | "hi_IN" | "it_IT" | "ja_JP" | "ko_KR" | "nl_NL" | "pl_PL" | "pt_BR" | "sv_SE" | "ta_IN" | "th_TH" | "tr_TR" | "vi_VN" | "zh_CN" | string;

export interface SDProductRecommendation {
  readonly asin?: string;
  readonly rank?: number;
}

export interface SDProductRecommendationsV31 {
  readonly products?: ReadonlyArray<Inline141>;
}

export interface SDProductRecommendationsV32 {
  readonly products?: ReadonlyArray<Inline143>;
}

export interface SDProductRecommendationV32 {
  readonly advertisedAsins?: ReadonlyArray<string>;
  readonly asin?: string;
  readonly rank?: number;
}

export interface SDProductTargetingRecommendationsSuccess {
  readonly code?: string;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline146>;
}

export interface SDProductTargetingRecommendationsSuccessV34 {
  readonly code?: string;
  readonly expression?: ReadonlyArray<Inline148>;
  readonly name?: string;
  readonly recommendations?: ReadonlyArray<Inline149>;
}

export interface SDProductTargetingTheme {
  readonly expression: ReadonlyArray<Inline151>;
  readonly name: string;
}

export interface SDProductTargetingThemeExpression {
  readonly type: string;
}

export type SDProductThemeRecommendations = ReadonlyArray<Inline154 | Inline155>;

export type SDProductThemeRecommendationsV34 = ReadonlyArray<Inline157 | Inline159>;

export type SDRecommendationType = "PRODUCT" | string;

export type SDRecommendationTypeV31 = "CATEGORY" | "PRODUCT" | string;

export type SDRecommendationTypeV32 = "AUDIENCE" | "CATEGORY" | "PRODUCT" | string;

export type SDRecommendationTypeV33 = "AUDIENCE" | "CATEGORY" | "CONTENT_CATEGORY" | "PRODUCT" | string;

export type SDRuleType = "PERFORMANCE" | "SCHEDULE" | string;

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

export type SDTactic = "T00001" | "T00010" | "T00020" | "remarketing" | string;

export type SDTacticV31 = "T00001" | "T00010" | "T00020" | "T00030" | "remarketing" | string;

export type SDTargetExpressionV31 = Inline169 | Inline170;

export type SDTargetExpressionV32 = Inline172 | Inline173 | Inline174;

export interface SDTargetingBidRecommendationsRequestV31 {
  readonly products?: ReadonlyArray<Inline176>;
  readonly targetingClauses: ReadonlyArray<Inline177>;
}

export interface SDTargetingBidRecommendationsRequestV32 {
  readonly bidOptimization: string;
  readonly costType: string;
  readonly products?: ReadonlyArray<Inline180>;
  readonly targetingClauses: ReadonlyArray<Inline181>;
}

export interface SDTargetingBidRecommendationsRequestV33 {
  readonly bidOptimization: string;
  readonly costType: string;
  readonly creativeType?: string;
  readonly products?: ReadonlyArray<Inline184>;
  readonly targetingClauses: ReadonlyArray<Inline185>;
}

export interface SDTargetingBidRecommendationsRequestV34 {
  readonly bidOptimization: string;
  readonly costType: string;
  readonly creativeType?: string;
  readonly products?: ReadonlyArray<Inline188>;
  readonly targetingClauses: ReadonlyArray<Inline189>;
}

export interface SDTargetingBidRecommendationsResponseItemFailureV31 {
  readonly code: string;
  readonly details: string;
}

export interface SDTargetingBidRecommendationsResponseItemSuccessV31 {
  readonly code: string;
  readonly rangeLower?: number;
  readonly rangeUpper?: number;
  readonly recommended?: number;
}

export interface SDTargetingBidRecommendationsResponseV31 {
  readonly bidRecommendations: ReadonlyArray<Inline195 | Inline196>;
  readonly costType: string;
}

export interface SDTargetingBidRecommendationsResponseV32 {
  readonly bidOptimization: string;
  readonly bidRecommendations: ReadonlyArray<Inline198 | Inline199>;
  readonly costType: string;
}

export interface SDTargetingClauseV31 {
  readonly expression: ReadonlyArray<Inline201 | Inline202>;
  readonly expressionType: string;
}

export interface SDTargetingClauseV32 {
  readonly expression: ReadonlyArray<Inline204 | Inline205 | Inline206>;
  readonly expressionType: string;
}

export type SDTargetingExpressionV31 = ReadonlyArray<Inline208 | Inline209>;

export type SDTargetingExpressionV32 = ReadonlyArray<Inline211 | Inline212 | Inline213>;

export interface SDTargetingPredicateBaseV31 {
  readonly type: string;
  readonly value?: string;
}

export interface SDTargetingPredicateNestedV31 {
  readonly type: string;
  readonly value: ReadonlyArray<Inline216>;
}

export interface SDTargetingPredicateV31 {
  readonly type: string;
  readonly value?: string;
}

export interface SDTargetingRecommendations {
  readonly products?: ReadonlyArray<Inline219>;
}

export interface SDTargetingRecommendationsFailure {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly name?: string;
}

export interface SDTargetingRecommendationsFailureV34 {
  readonly code?: string;
  readonly errorMessage?: string;
  readonly expression?: ReadonlyArray<Inline222>;
  readonly name?: string;
}

export type SDTargetingRecommendationsProducts = ReadonlyArray<Inline224>;

export type SDTargetingRecommendationsProductsV31 = ReadonlyArray<Inline226>;

export interface SDTargetingRecommendationsRequest {
  readonly products: ReadonlyArray<Inline228>;
  readonly tactic: string;
  readonly typeFilter: ReadonlyArray<string>;
}

export interface SDTargetingRecommendationsRequestV31 {
  readonly products: ReadonlyArray<Inline230>;
  readonly tactic: string;
  readonly typeFilter: ReadonlyArray<string>;
}

export interface SDTargetingRecommendationsRequestV32 {
  readonly products: ReadonlyArray<Inline232>;
  readonly tactic: string;
  readonly themes?: Inline233;
  readonly typeFilter: ReadonlyArray<string>;
}

export interface SDTargetingRecommendationsRequestV33 {
  readonly products: ReadonlyArray<Inline235>;
  readonly tactic: string;
  readonly themes?: Inline236;
  readonly typeFilter: ReadonlyArray<string>;
}

export interface SDTargetingRecommendationsRequestV34 {
  readonly products: ReadonlyArray<Inline238>;
  readonly tactic: string;
  readonly themes?: Inline239;
  readonly typeFilter: ReadonlyArray<string>;
}

export interface SDTargetingRecommendationsRequestV35 {
  readonly categoryType?: string;
  readonly locationExpression?: ReadonlyArray<Inline241>;
  readonly products: ReadonlyArray<Inline242>;
  readonly tactic: string;
  readonly themes?: Inline243;
  readonly typeFilter: ReadonlyArray<string>;
}

export interface SDTargetingRecommendationsResponse {
  readonly recommendations?: Inline245;
}

export interface SDTargetingRecommendationsResponseV31 {
  readonly recommendations?: Inline247;
}

export interface SDTargetingRecommendationsResponseV32 {
  readonly recommendations?: Inline250;
}

export interface SDTargetingRecommendationsResponseV33 {
  readonly recommendations?: Inline255;
}

export interface SDTargetingRecommendationsResponseV34 {
  readonly recommendations?: Inline261;
}

export interface SDTargetingRecommendationsResponseV35 {
  readonly recommendations?: Inline268;
}

export interface SDTargetingRecommendationsThemes {
  readonly product?: ReadonlyArray<Inline276>;
}

export type SDTargetingRecommendationsTypeFilterV31 = ReadonlyArray<string>;

export type SDTargetingRecommendationsTypeFilterV32 = ReadonlyArray<string>;

export type SDTargetingRecommendationsTypeFilterV33 = ReadonlyArray<string>;

export interface SDTargetingRecommendationsV31 {
  readonly products?: ReadonlyArray<Inline281>;
  readonly categories?: ReadonlyArray<Inline282>;
}

export interface SDTargetingRecommendationsV32 {
  readonly products?: ReadonlyArray<Inline284>;
  readonly categories?: ReadonlyArray<Inline285>;
  readonly themes?: Inline286;
}

export interface SDTargetingRecommendationsV33 {
  readonly products?: ReadonlyArray<Inline289>;
  readonly categories?: ReadonlyArray<Inline290>;
  readonly audiences?: ReadonlyArray<Inline291>;
  readonly themes?: Inline292;
}

export interface SDTargetingRecommendationsV34 {
  readonly audiences?: ReadonlyArray<Inline295>;
  readonly categories?: ReadonlyArray<Inline296>;
  readonly products?: ReadonlyArray<Inline297>;
  readonly themes?: Inline298;
}

export interface SDTargetingRecommendationsV35 {
  readonly audiences?: ReadonlyArray<Inline302>;
  readonly categories?: ReadonlyArray<Inline303>;
  readonly contentCategories?: ReadonlyArray<Inline304>;
  readonly products?: ReadonlyArray<Inline305>;
  readonly themes?: Inline306;
}

export interface SDThemeRecommendations {
  readonly products?: ReadonlyArray<Inline310 | Inline311>;
}

export interface SDThemeRecommendationsV34 {
  readonly products?: ReadonlyArray<Inline313 | Inline315>;
}

export interface SnapshotRequest {
  readonly stateFilter?: string;
  readonly tacticFilter?: string;
}

export interface SnapshotResponse {
  readonly expiration?: number;
  readonly fileSize?: number;
  readonly location?: string;
  readonly recordType?: string;
  readonly snapshotId?: string;
  readonly status?: string;
  readonly statusDetails?: string;
}

export type state = "ACTIVE" | "PAUSED" | string;

export interface timeOfDay {
  readonly endTime?: string;
  readonly startTime?: string;
}

export interface UpdateBudgetRulesForSDCampaignsParams {
  readonly budgetRulesDetails?: ReadonlyArray<Inline366>;
}

export interface UpdateBudgetRulesForSDCampaignsResponse {

}

export interface UpdateBudgetRulesResponse {
  readonly responses?: ReadonlyArray<Inline321>;
}

export interface UpdateSDBudgetRulesRequest {
  readonly budgetRulesDetails?: ReadonlyArray<Inline323>;
}
