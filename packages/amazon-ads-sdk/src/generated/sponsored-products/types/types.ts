// This file is generated. Do not edit by hand.

export interface AccessDeniedException {
  readonly code?: string;
  readonly details?: string;
}

export interface AdGroup {
  readonly adGroupId?: string;
  readonly asins: ReadonlyArray<string>;
  readonly targetingExpressions: ReadonlyArray<Inline1>;
}

export interface AdGroupBasedRequest {
  readonly adGroupId?: string;
  readonly bidsEnabled?: boolean;
  readonly campaignId?: string;
  readonly recommendationType?: string;
  readonly locale?: string;
  readonly maxRecommendations?: number;
  readonly sortDimension?: string;
}

export interface AdGroupKeywordTargetRankRecommendationRequest {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly recommendationType: string;
  readonly targets?: ReadonlyArray<Inline4>;
}

export interface AdGroupThemeBasedBidRecommendationRequest {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly recommendationType: string;
  readonly targetingExpressions: ReadonlyArray<Inline6>;
}

export interface AdGroupThemeBasedBidRecommendationRequestV4 {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly recommendationType: string;
  readonly targetingExpressions: ReadonlyArray<Inline8>;
}

export interface AdGroupThemeBasedBidRecommendationRequestV5 {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly includeAnalysis?: boolean;
  readonly recommendationType: string;
  readonly targetingExpressions: ReadonlyArray<Inline10>;
}

export interface Adjustment {
  readonly placementAdjustment?: Inline12;
}

export interface AgeRange {
  readonly id?: string;
  readonly name?: string;
}

export interface AgeRangeLoP {
  readonly id?: string;
  readonly name?: string;
  readonly translatedName?: string;
}

export type AgeRanges = ReadonlyArray<Inline16>;

export type AgeRangesLoP = ReadonlyArray<Inline18>;

export interface AsinsBasedRequest {
  readonly biddingStrategy?: string;
  readonly bidsEnabled?: boolean;
  readonly recommendationType?: string;
  readonly locale?: string;
  readonly maxRecommendations?: number;
  readonly sortDimension?: string;
}

export interface AsinsKeywordTargetRankRecommendationRequest {
  readonly asins: ReadonlyArray<string>;
  readonly recommendationType: string;
  readonly targets?: ReadonlyArray<Inline21>;
}

export interface AsinsThemeBasedBidRecommendationRequest {
  readonly asins: ReadonlyArray<string>;
  readonly bidding: Inline23;
  readonly recommendationType: string;
  readonly targetingExpressions: ReadonlyArray<Inline24>;
}

export interface AsinsThemeBasedBidRecommendationRequestV4 {
  readonly asins: ReadonlyArray<string>;
  readonly bidding: Inline26;
  readonly productDetailsList?: ReadonlyArray<Inline27>;
  readonly recommendationType: string;
  readonly targetingExpressions: ReadonlyArray<Inline28>;
}

export interface AsinsThemeBasedBidRecommendationRequestV5 {
  readonly asins: ReadonlyArray<string>;
  readonly bidding: Inline30;
  readonly includeAnalysis?: boolean;
  readonly productDetailsList?: ReadonlyArray<Inline31>;
  readonly recommendationType: string;
  readonly targetingExpressions: ReadonlyArray<Inline32>;
}

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

export interface AssociateOptimizationRulesToCampaignParams {
  readonly campaignId: string;
  readonly optimizationRuleIds: ReadonlyArray<string>;
}

export interface AssociateOptimizationRulesToCampaignResponse {

}

export interface AudienceSegment {
  readonly audienceId: string;
  readonly audienceSegmentType: string;
}

export interface BadRequestException {
  readonly code?: string;
  readonly details?: string;
}

export interface Benchmark {
  readonly benchmarkStatus?: string;
  readonly values?: Inline38;
}

export type BidAnalyses = ReadonlyArray<Inline42>;

export interface BidAnalysesPerPlacement {
  readonly ALL: ReadonlyArray<Inline44>;
  readonly PLACEMENT_PRODUCT_PAGE: ReadonlyArray<Inline45>;
  readonly PLACEMENT_REST_OF_SEARCH: ReadonlyArray<Inline46>;
  readonly PLACEMENT_TOP: ReadonlyArray<Inline47>;
}

export interface BidAnalysesPerTargetingExpression {
  readonly bidAnalyses: Inline49;
  readonly targetingExpression: Inline53;
}

export interface BidAnalysis {
  readonly bid: number;
  readonly impactMetrics: Inline55;
  readonly type: string;
}

export interface BidAnalysisImpactMetrics {
  readonly estimatedImpressionAvg: number;
  readonly estimatedImpressionLower: number;
  readonly estimatedImpressionUpper: number;
}

export interface Bidding {
  readonly adjustments?: ReadonlyArray<Inline58>;
  readonly strategy: string;
}

export type BiddingStrategy = "AUTO_FOR_SALES" | "LEGACY_FOR_SALES" | "MANUAL" | "RULE_BASED" | string;

export interface BiddingStrategyRecommendation {
  readonly action?: string;
  readonly suggestedBiddingStrategy?: string;
}

export interface BidPlacementAdjustment {
  readonly percentage?: number;
  readonly predicate?: string;
}

export interface BidRecommendationError {
  readonly code: string;
  readonly details: string;
}

export interface BidRecommendationPerTargetingExpression {
  readonly bidValues: ReadonlyArray<Inline64>;
  readonly targetingExpression: Inline65;
}

export interface BidRecommendationPerTargetingExpressionV4 {
  readonly bidValues: ReadonlyArray<Inline67>;
  readonly targetingExpression: Inline68;
}

export interface BidRecommendationPerTargetingExpressionV5 {
  readonly bidValues: ReadonlyArray<Inline70>;
  readonly suggestedBidImpactMetrics?: Inline71;
  readonly targetingExpression: Inline72;
}

export interface BidSuggestion {
  readonly bidRecId?: string;
  readonly rangeEnd?: number;
  readonly rangeStart?: number;
  readonly suggested?: number;
}

export interface BidValue {
  readonly suggestedBid: number;
}

export interface BidValues {
  readonly rangeEnd?: number;
  readonly rangeStart?: number;
  readonly suggested?: number;
}

export interface Brand {
  readonly id?: string;
  readonly name?: string;
}

export interface BrandLoP {
  readonly id?: string;
  readonly name?: string;
}

export type Brands = ReadonlyArray<Inline79>;

export type BrandsLoP = ReadonlyArray<Inline81>;

export type BudgetChangeType = "PERCENT" | string;

export interface budgetIncreaseBy {
  readonly type: string;
  readonly value: number;
}

export interface BudgetRecommendation {
  readonly action?: string;
  readonly suggestedBudget?: number;
}

export interface BudgetRecommendationError {
  readonly Error: Inline86;
  readonly campaignId: string;
  readonly index: number;
}

export interface BudgetRecommendationForExistingCampaign {
  readonly budgetRuleRecommendation: Inline88;
  readonly campaignId: string;
  readonly index: number;
  readonly sevenDaysMissedOpportunities: Inline89;
  readonly suggestedBudget: number;
}

export type BudgetRecommendationNewCampaignsErrorMessage = string;

export interface BudgetRecommendationNewCampaignsException {
  readonly message?: string;
}

export interface BudgetRecommendationRequest {
  readonly campaignIds: ReadonlyArray<string>;
}

export interface BudgetRecommendationResponse {
  readonly budgetRecommendationsErrorResults: ReadonlyArray<Inline94>;
  readonly budgetRecommendationsSuccessResults: ReadonlyArray<Inline95>;
}

export interface BudgetRuleError {
  readonly code?: string;
  readonly details?: string;
}

export interface BudgetRuleRecommendation {
  readonly ruleId?: string;
  readonly ruleName?: string;
  readonly suggestedBudgetIncreasePercent?: number;
}

export interface BudgetRuleResponse {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}

export interface BudgetRulesRelations {
  readonly budgetRuleId: string;
  readonly campaignId: string;
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
  readonly error?: ReadonlyArray<Inline105>;
  readonly success?: ReadonlyArray<Inline106>;
}

export interface BudgetUsageError {
  readonly code?: string;
  readonly details?: string;
}

export interface BulkBudgetRulesAssociationForSPParams {
  readonly budgetRulesAssociations?: ReadonlyArray<Inline2722>;
}

export interface BulkBudgetRulesAssociationForSPResponse {

}

export interface BulkBudgetRulesAssociationRequest {
  readonly budgetRulesAssociations?: ReadonlyArray<Inline109>;
}

export interface BulkBudgetRulesAssociationResponse {
  readonly budgetRulesAssociations?: Inline111;
}

export interface BulkBudgetRulesDisAssociationForSPParams {
  readonly budgetRulesDisAssociations?: ReadonlyArray<Inline2726>;
}

export interface BulkBudgetRulesDisAssociationForSPResponse {

}

export interface BulkBudgetRulesDisAssociationRequest {
  readonly budgetRulesDisAssociations?: ReadonlyArray<Inline114>;
}

export interface BulkBudgetRulesDisAssociationResponse {
  readonly budgetRulesDisAssociations?: Inline116;
}

export interface BulkBudgetRulesRelationsResponse {
  readonly campaignId?: string;
  readonly code?: string;
  readonly details?: string;
  readonly index?: number;
  readonly ruleId?: string;
}

export interface Campaign {
  readonly campaignId: string;
  readonly recommendationType: string;
}

export type campaignOptimizationId = string;

export interface CampaignOptimizationRule {
  readonly campaignIds?: ReadonlyArray<string>;
  readonly campaignOptimizationId: string;
  readonly createdDate?: string;
  readonly recurrence?: string;
  readonly ruleAction?: string;
  readonly ruleCondition?: ReadonlyArray<Inline122>;
  readonly ruleName?: string;
  readonly ruleStatus?: string;
  readonly ruleType?: string;
}

export interface CampaignOptimizationRuleError {
  readonly code?: string;
  readonly details?: string;
}

export interface CampaignRecommendation {
  readonly biddingStrategyRecommendation?: Inline125;
  readonly budgetRecommendation?: Inline126;
  readonly campaignId?: string;
  readonly keywordTargetingRecommendations?: ReadonlyArray<Inline127>;
  readonly placementBiddingRecommendations?: ReadonlyArray<Inline128>;
  readonly sevenDaysEstimatedOpportunities?: Inline129;
  readonly targetingGroupBidRecommendations?: ReadonlyArray<Inline130>;
}

export interface CategoryItem {
  readonly canBeTargeted?: boolean;
  readonly id?: string;
  readonly name?: string;
  readonly parent?: string;
  readonly path?: string;
}

export interface CategoryItemWithAsinCounts {
  readonly asinCounts?: Inline133;
  readonly categoryPath?: string;
  readonly id?: string;
  readonly name?: string;
  readonly parentCategoryId?: string;
}

export interface CategoryItemWithAsinCountsLoP {
  readonly asinCounts?: Inline135;
  readonly categoryPath?: string;
  readonly id?: string;
  readonly name?: string;
  readonly parentCategoryId?: string;
  readonly translatedCategoryPath?: string;
  readonly translatedName?: string;
}

export interface CategoryRecommendations {
  readonly categories?: ReadonlyArray<Inline137>;
}

export interface CategoryRecommendationsWithAsinCounts {
  readonly categories?: ReadonlyArray<Inline139>;
}

export interface CategoryRecommendationsWithAsinCountsLoP {
  readonly categories?: ReadonlyArray<Inline141>;
}

export interface Clicks {
  readonly lower?: number;
  readonly upper?: number;
}

export type ComparisonOperator = "EQUAL_TO" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | string;

export interface Conversions {
  readonly lower?: number;
  readonly upper?: number;
}

export type CountryCodes = ReadonlyArray<string>;

export interface CountryKeyword {
  readonly bid?: number;
  readonly userSelectedKeyword?: boolean;
  readonly value?: string;
}

export interface CountryTarget {
  readonly countryKeywords?: Inline148;
  readonly matchType?: string;
}

export interface CreateAssociatedBudgetRulesForSPCampaignsParams {
  readonly campaignId: number;
  readonly budgetRuleIds?: ReadonlyArray<string>;
}

export interface CreateAssociatedBudgetRulesForSPCampaignsResponse {

}

export interface CreateAssociatedBudgetRulesRequest {
  readonly budgetRuleIds?: ReadonlyArray<string>;
}

export interface CreateAssociatedBudgetRulesResponse {
  readonly responses?: ReadonlyArray<Inline151>;
}

export interface CreateBudgetRulesForSPCampaignsParams {
  readonly budgetRulesDetails?: ReadonlyArray<Inline2688>;
}

export interface CreateBudgetRulesForSPCampaignsResponse {

}

export interface CreateBudgetRulesResponse {
  readonly responses?: ReadonlyArray<Inline153>;
}

export interface CreateOptimizationRuleParams {
  readonly campaignIds: ReadonlyArray<string>;
  readonly recurrence: string;
  readonly ruleAction: string;
  readonly ruleCondition?: ReadonlyArray<Inline2989>;
  readonly ruleName?: string;
  readonly ruleType: string;
}

export interface CreateOptimizationRuleResponse {
  readonly data: Inline2991;
}

export interface CreateOptimizationRulesParams {
  readonly optimizationRules: ReadonlyArray<Inline3013>;
}

export interface CreateOptimizationRulesResponse {

}

export interface CreateSPBudgetRulesRequest {
  readonly budgetRulesDetails?: ReadonlyArray<Inline155>;
}

export interface CreateSPCampaignOptimizationRulesRequest {
  readonly campaignIds: ReadonlyArray<string>;
  readonly recurrence: string;
  readonly ruleAction: string;
  readonly ruleCondition?: ReadonlyArray<Inline161>;
  readonly ruleName?: string;
  readonly ruleType: string;
}

export interface CreateSPCampaignOptimizationRulesResponse {
  readonly campaignOptimizationId?: string;
  readonly code?: string;
  readonly details?: string;
}

export interface CreateSponsoredProductsAdGroupsParams {
  readonly adGroups: ReadonlyArray<Inline2664>;
}

export interface CreateSponsoredProductsAdGroupsResponse {

}

export interface CreateSponsoredProductsCampaignNegativeKeywordsParams {
  readonly campaignNegativeKeywords: ReadonlyArray<Inline2736>;
}

export interface CreateSponsoredProductsCampaignNegativeKeywordsResponse {

}

export interface CreateSponsoredProductsCampaignNegativeTargetingClausesParams {
  readonly campaignNegativeTargetingClauses: ReadonlyArray<Inline2759>;
}

export interface CreateSponsoredProductsCampaignNegativeTargetingClausesResponse {

}

export interface CreateSponsoredProductsCampaignsParams {
  readonly campaigns: ReadonlyArray<Inline2784>;
}

export interface CreateSponsoredProductsCampaignsResponse {

}

export interface CreateSponsoredProductsKeywordsParams {
  readonly keywords: ReadonlyArray<Inline2882>;
}

export interface CreateSponsoredProductsKeywordsResponse {

}

export interface CreateSponsoredProductsNegativeKeywordsParams {
  readonly negativeKeywords: ReadonlyArray<Inline2907>;
}

export interface CreateSponsoredProductsNegativeKeywordsResponse {

}

export interface CreateSponsoredProductsNegativeTargetingClausesParams {
  readonly negativeTargetingClauses: ReadonlyArray<Inline2932>;
}

export interface CreateSponsoredProductsNegativeTargetingClausesResponse {

}

export interface CreateSponsoredProductsProductAdsParams {
  readonly productAds: ReadonlyArray<Inline2965>;
}

export interface CreateSponsoredProductsProductAdsResponse {

}

export interface CreateSponsoredProductsTargetingClausesParams {
  readonly targetingClauses: ReadonlyArray<Inline3093>;
}

export interface CreateSponsoredProductsTargetingClausesResponse {

}

export interface CreateTargetPromotionGroupsParams {
  readonly adGroupId: string;
  readonly adIds?: ReadonlyArray<string>;
  readonly existingCampaignDetails?: Inline3055;
  readonly newCampaignDetails?: Inline3056;
}

export interface CreateTargetPromotionGroupsResponse {
  readonly data: Inline3060;
}

export interface CreateTargetPromotionGroupTargetsParams {
  readonly targetPromotionGroupId: string;
  readonly targets?: ReadonlyArray<Inline3082>;
}

export interface CreateTargetPromotionGroupTargetsResponse {

}

export interface DateRangeTypeRuleDuration {
  readonly endDate?: string;
  readonly startDate: string;
}

export type DayOfWeek = "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY" | string;

export interface DeleteCampaignOptimizationRuleParams {
  readonly campaignOptimizationId: string;
}

export interface DeleteCampaignOptimizationRuleResponse {
  readonly data: Inline3000;
}

export interface DeleteSPCampaignOptimizationRuleResponse {
  readonly campaignOptimizationId?: string;
  readonly code?: string;
  readonly details?: string;
}

export interface DeleteSponsoredProductsAdGroupsParams {
  readonly adGroupIdFilter: Inline2672;
}

export interface DeleteSponsoredProductsAdGroupsResponse {

}

export interface DeleteSponsoredProductsCampaignNegativeKeywordsParams {
  readonly campaignNegativeKeywordIdFilter: Inline2744;
}

export interface DeleteSponsoredProductsCampaignNegativeKeywordsResponse {

}

export interface DeleteSponsoredProductsCampaignNegativeTargetingClausesParams {
  readonly campaignNegativeTargetIdFilter: Inline2767;
}

export interface DeleteSponsoredProductsCampaignNegativeTargetingClausesResponse {

}

export interface DeleteSponsoredProductsCampaignsParams {
  readonly campaignIdFilter: Inline2833;
}

export interface DeleteSponsoredProductsCampaignsResponse {

}

export interface DeleteSponsoredProductsKeywordsParams {
  readonly keywordIdFilter: Inline2890;
}

export interface DeleteSponsoredProductsKeywordsResponse {

}

export interface DeleteSponsoredProductsNegativeKeywordsParams {
  readonly negativeKeywordIdFilter: Inline2915;
}

export interface DeleteSponsoredProductsNegativeKeywordsResponse {

}

export interface DeleteSponsoredProductsNegativeTargetingClausesParams {
  readonly negativeTargetIdFilter: Inline2946;
}

export interface DeleteSponsoredProductsNegativeTargetingClausesResponse {

}

export interface DeleteSponsoredProductsProductAdsParams {
  readonly adIdFilter: Inline2973;
}

export interface DeleteSponsoredProductsProductAdsResponse {

}

export interface DeleteSponsoredProductsTargetingClausesParams {
  readonly targetIdFilter: Inline3121;
}

export interface DeleteSponsoredProductsTargetingClausesResponse {

}

export interface DisassociateAssociatedBudgetRuleForSPCampaignsParams {
  readonly campaignId: number;
  readonly budgetRuleId: string;
}

export interface DisassociateAssociatedBudgetRuleForSPCampaignsResponse {
  readonly data: Inline2818;
}

export interface DisassociateAssociatedBudgetRuleResponse {

}

export interface EventTypeRuleDuration {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface FetchCampaignRecommendationsParams {
  readonly campaigns: ReadonlyArray<Inline2731>;
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface FetchCampaignRecommendationsResponse {
  readonly data: Inline2733;
}

export interface ForecastEstimates {
  readonly endDate?: string;
  readonly estimatedAdSpendLower?: number;
  readonly estimatedAdSpendUpper?: number;
  readonly estimatedIncrementalClicksLower?: number;
  readonly estimatedIncrementalClicksUpper?: number;
  readonly estimatedIncrementalConversionsLower?: number;
  readonly estimatedIncrementalConversionsUpper?: number;
  readonly estimatedIncrementalImpressionsLower?: number;
  readonly estimatedIncrementalImpressionsUpper?: number;
  readonly estimatedIncrementalSalesLower?: number;
  readonly estimatedIncrementalSalesUpper?: number;
  readonly startDate?: string;
}

export interface Genre {
  readonly id?: string;
  readonly name?: string;
}

export interface GenreLoP {
  readonly id?: string;
  readonly name?: string;
  readonly translatedName?: string;
}

export type Genres = ReadonlyArray<Inline172>;

export type GenresLoP = ReadonlyArray<Inline174>;

export interface GetBudgetRecommendationParams {
  readonly adGroups: ReadonlyArray<Inline2837>;
  readonly bidding: Inline2838;
  readonly endDate?: string;
  readonly startDate?: string;
  readonly targetingType: string;
}

export interface GetBudgetRecommendationResponse {
  readonly data: Inline2840;
}

export interface GetBudgetRecommendationsParams {
  readonly campaignIds: ReadonlyArray<string>;
}

export interface GetBudgetRecommendationsResponse {
  readonly data: Inline2825;
}

export interface GetBudgetRuleByRuleIdForSPCampaignsParams {
  readonly budgetRuleId: string;
}

export interface GetBudgetRuleByRuleIdForSPCampaignsResponse {
  readonly data: Inline2713;
}

export interface GetCampaignOptimizationRuleParams {
  readonly campaignOptimizationId: string;
}

export interface GetCampaignOptimizationRuleResponse {
  readonly data: Inline3003;
}

export interface GetCampaignRecommendationsParams {
  readonly campaignIds?: ReadonlyArray<string>;
  readonly nextToken?: string;
  readonly maxResults?: string;
}

export interface GetCampaignRecommendationsRequestV2 {
  readonly campaigns: ReadonlyArray<Inline176>;
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface GetCampaignRecommendationsResponse {
  readonly nextToken?: string;
  readonly recommendations: ReadonlyArray<Inline178>;
}

export interface GetCampaignRecommendationsResponseV2 {
  readonly nextToken?: string;
  readonly recommendations: ReadonlyArray<Inline185>;
}

export interface GetCampaignsAssociatedWithSPBudgetRuleParams {
  readonly budgetRuleId: string;
  readonly nextToken?: string;
  readonly pageSize: number;
}

export interface GetCampaignsAssociatedWithSPBudgetRuleResponse {
  readonly data: Inline2720;
}

export interface GetCategoryRecommendationsForASINsParams {
  readonly locale?: string;
  readonly asins?: ReadonlyArray<string>;
  readonly includeAncestor?: boolean;
}

export interface GetCategoryRecommendationsForAsinsRequest {
  readonly asins?: ReadonlyArray<string>;
  readonly includeAncestor?: boolean;
}

export interface GetCategoryRecommendationsForASINsResponse {
  readonly data: Inline3114;
}

export interface GetGlobalRankedKeywordRecommendationParams {
  readonly body: Inline2876 | Inline2878;
}

export interface GetGlobalRankedKeywordRecommendationResponse {
  readonly data: Inline2880;
}

export interface GetKeywordGroupRecommendationsParams {
  readonly asins: ReadonlyArray<string>;
  readonly countryCode?: string;
  readonly nextToken?: string;
}

export interface GetKeywordGroupRecommendationsResponse {
  readonly data: Inline3053;
}

export interface GetMultiCountryThemeBasedBidRecommendationForAdGroupV1Params {
  readonly body: Inline2867 | Inline2868;
}

export interface GetMultiCountryThemeBasedBidRecommendationForAdGroupV1Response {
  readonly data: Inline2872;
}

export interface GetNegativeBrandsParams {

}

export interface GetNegativeBrandsResponse {
  readonly data: ReadonlyArray<Inline2941>;
}

export interface GetOptimizationRuleEligibilityParams {
  readonly campaignIds: ReadonlyArray<string>;
  readonly requirePerformanceMetrics?: boolean;
}

export interface GetOptimizationRuleEligibilityResponse {
  readonly data: Inline3006;
}

export interface GetProductRecommendationsParams {
  readonly adAsins: ReadonlyArray<string>;
  readonly count?: number;
  readonly cursor?: string;
  readonly locale?: string;
}

export interface GetProductRecommendationsRequest {
  readonly adAsins: ReadonlyArray<string>;
  readonly count?: number;
  readonly cursor?: string;
  readonly locale?: string;
}

export interface GetProductRecommendationsResponse {
  readonly data: Inline3161;
}

export interface GetRankedKeywordRecommendationParams {
  readonly body: Inline3125 | Inline3126;
}

export interface GetRankedKeywordRecommendationResponse {
  readonly data: Inline3128;
}

export interface GetRefinementsForCategoryParams {
  readonly categoryId: string;
  readonly locale?: string;
}

export interface GetRefinementsForCategoryResponse {
  readonly data: Inline3117;
}

export interface GetRuleNotificationParams {
  readonly campaignIds: ReadonlyArray<string>;
}

export interface GetRuleNotificationResponse {
  readonly data: Inline3010;
}

export interface GetSPBudgetRuleResponse {
  readonly budgetRule?: Inline189;
}

export interface GetSPBudgetRulesForAdvertiserParams {
  readonly nextToken?: string;
  readonly pageSize: number;
}

export interface GetSPBudgetRulesForAdvertiserResponse {
  readonly budgetRulesForAdvertiserResponse?: ReadonlyArray<Inline195>;
  readonly nextToken?: string;
}

export interface GetSPCampaignOptimizationRuleResponse {
  readonly CampaignOptimizationRule?: Inline201;
}

export interface GetTargetableASINCountsParams {
  readonly ageRanges?: ReadonlyArray<Inline3147>;
  readonly brands?: ReadonlyArray<Inline3148>;
  readonly category: string;
  readonly genres?: ReadonlyArray<Inline3149>;
  readonly isPrimeShipping?: boolean;
  readonly priceRange?: Inline3150;
  readonly ratingRange?: Inline3151;
}

export interface GetTargetableAsinCountsRequest {
  readonly ageRanges?: ReadonlyArray<Inline203>;
  readonly brands?: ReadonlyArray<Inline204>;
  readonly category: string;
  readonly genres?: ReadonlyArray<Inline205>;
  readonly isPrimeShipping?: boolean;
  readonly priceRange?: Inline206;
  readonly ratingRange?: Inline207;
}

export interface GetTargetableASINCountsResponse {
  readonly data: Inline3153;
}

export interface GetTargetableCategoriesParams {
  readonly locale?: string;
}

export interface GetTargetableCategoriesResponse {
  readonly data: Inline3111;
}

export interface GetTargetPromotionGroupsRecommendationsParams {
  readonly adGroupIdFilter?: Inline3073;
  readonly adIdFilter?: Inline3074;
  readonly campaignIdFilter?: Inline3075;
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface GetTargetPromotionGroupsRecommendationsResponse {
  readonly data: Inline3077;
}

export interface GetThemeBasedBidRecommendationForAdGroupV1Params {
  readonly body: Inline3101 | Inline3102;
}

export interface GetThemeBasedBidRecommendationForAdGroupV1Response {
  readonly data: Inline3105;
}

export interface GlobalRankedKeywordTargetsForAdGroupRequest {
  readonly targets?: ReadonlyArray<Inline209>;
  readonly adGroupId: string;
  readonly bidsEnabled?: boolean;
  readonly campaignId: string;
  readonly recommendationType: string;
}

export interface GlobalRankedKeywordTargetsForAsinsRequest {
  readonly products?: ReadonlyArray<Inline211>;
  readonly targets?: ReadonlyArray<Inline212>;
  readonly biddingStrategy?: string;
  readonly bidsEnabled?: boolean;
  readonly recommendationType: string;
}

export interface GlobalRankedTargetWithThemedBidsResponse {
  readonly countryCodes?: Inline214;
}

export interface ImpactMetric {
  readonly values?: ReadonlyArray<Inline216>;
}

export interface ImpactMetrics {
  readonly clicks?: Inline218;
  readonly orders?: Inline219;
}

export interface Impressions {
  readonly lower?: number;
  readonly upper?: number;
}

export interface InitialBudgetRecommendationRequest {
  readonly adGroups: ReadonlyArray<Inline222>;
  readonly bidding: Inline223;
  readonly endDate?: string;
  readonly startDate?: string;
  readonly targetingType: string;
}

export interface InitialBudgetRecommendationResponse {
  readonly benchmark: Inline225;
  readonly dailyBudget: number;
  readonly recommendationId?: string;
  readonly specialEvents: ReadonlyArray<Inline228>;
}

export interface Inline1 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline10 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline1000 {
  readonly cause?: Inline1000;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1001 {
  readonly cause?: Inline1001;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1002 {
  readonly cause?: Inline1002;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1003 {
  readonly cause?: Inline1003;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1004 {
  readonly cause?: Inline1004;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1005 {
  readonly cause?: Inline1005;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1006 {
  readonly cause?: Inline1006;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1007 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1007;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1008 {
  readonly cause?: Inline1008;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1010 {
  readonly billingError?: Inline1010;
  readonly duplicateValueError?: Inline1011;
  readonly entityNotFoundError?: Inline1012;
  readonly entityQuotaError?: Inline1013;
  readonly entityStateError?: Inline1014;
  readonly internalServerError?: Inline1015;
  readonly malformedValueError?: Inline1016;
  readonly missingValueError?: Inline1017;
  readonly otherError?: Inline1018;
  readonly parentEntityError?: Inline1019;
  readonly rangeError?: Inline1020;
  readonly throttledError?: Inline1021;
}

export interface Inline1011 {
  readonly cause?: Inline1011;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1012 {
  readonly cause?: Inline1012;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1013 {
  readonly cause?: Inline1013;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1014 {
  readonly cause?: Inline1014;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1015 {
  readonly cause?: Inline1015;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1016 {
  readonly cause?: Inline1016;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1017 {
  readonly cause?: Inline1017;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1018 {
  readonly cause?: Inline1018;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1019 {
  readonly cause?: Inline1019;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1020 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1020;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1021 {
  readonly cause?: Inline1021;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1023 {
  readonly cause?: Inline1023;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1024 {
  readonly cause?: Inline1024;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1025 {
  readonly cause?: Inline1025;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1026 {
  readonly cause?: Inline1026;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1027 {
  readonly cause?: Inline1027;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1028 {
  readonly cause?: Inline1028;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1029 {
  readonly cause?: Inline1029;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1030 {
  readonly cause?: Inline1030;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1031 {
  readonly cause?: Inline1031;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1032 {
  readonly cause?: Inline1032;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1033 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1033;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1034 {
  readonly cause?: Inline1034;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1036 {
  readonly errorType: string;
  readonly errorValue: Inline1036;
}

export interface Inline1037 {
  readonly cause?: Inline1037;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1038 {
  readonly cause?: Inline1038;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1039 {
  readonly cause?: Inline1039;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1040 {
  readonly cause?: Inline1040;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1041 {
  readonly cause?: Inline1041;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1042 {
  readonly cause?: Inline1042;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1043 {
  readonly cause?: Inline1043;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1044 {
  readonly cause?: Inline1044;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1045 {
  readonly cause?: Inline1045;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1046 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1046;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1047 {
  readonly cause?: Inline1047;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1049 {
  readonly campaignId: string;
  readonly extendedData?: Inline1049;
  readonly globalKeywordId?: string;
  readonly keywordId: string;
  readonly keywordText: string;
  readonly matchType: string;
  readonly state: string;
}

export interface Inline105 {
  readonly campaignId?: string;
  readonly code?: string;
  readonly details?: string;
  readonly index?: number;
}

export interface Inline1051 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline1052 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline1052>;
}

export interface Inline1053 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline1055 {
  readonly helpUrl?: string;
  readonly message?: string;
  readonly name?: string;
}

export interface Inline1057 {
  readonly errorType: string;
  readonly errorValue: Inline1057;
}

export interface Inline1058 {
  readonly cause?: Inline1058;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1059 {
  readonly cause?: Inline1059;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline106 {
  readonly budget?: number;
  readonly budgetUsagePercent?: number;
  readonly campaignId?: string;
  readonly index?: number;
  readonly usageUpdatedTimestamp?: string;
}

export interface Inline1060 {
  readonly cause?: Inline1060;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1061 {
  readonly cause?: Inline1061;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1062 {
  readonly cause?: Inline1062;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1063 {
  readonly cause?: Inline1063;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1064 {
  readonly cause?: Inline1064;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1065 {
  readonly cause?: Inline1065;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1066 {
  readonly cause?: Inline1066;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1067 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1067;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1068 {
  readonly cause?: Inline1068;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1069 {
  readonly cause?: Inline1069;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1071 {
  readonly campaignId: string;
  readonly expression: ReadonlyArray<Inline1071>;
  readonly extendedData?: Inline1072;
  readonly globalTargetId?: string;
  readonly resolvedExpression: ReadonlyArray<Inline1073>;
  readonly state: string;
  readonly targetId: string;
}

export interface Inline1072 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline1072>;
}

export interface Inline1073 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline1075 {
  readonly entityNotFoundError?: Inline1075;
  readonly internalServerError?: Inline1076;
  readonly invalidInputError?: Inline1077;
  readonly malformedValueError?: Inline1078;
  readonly missingValueError?: Inline1079;
  readonly otherError?: Inline1080;
  readonly rangeError?: Inline1081;
  readonly throttledError?: Inline1082;
}

export interface Inline1076 {
  readonly cause?: Inline1076;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1077 {
  readonly cause?: Inline1077;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1078 {
  readonly cause?: Inline1078;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1079 {
  readonly cause?: Inline1079;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1080 {
  readonly cause?: Inline1080;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1081 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1081;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1082 {
  readonly cause?: Inline1082;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1084 {
  readonly cause?: Inline1084;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1085 {
  readonly cause?: Inline1085;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1086 {
  readonly cause?: Inline1086;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1087 {
  readonly cause?: Inline1087;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1088 {
  readonly cause?: Inline1088;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1089 {
  readonly cause?: Inline1089;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline109 {
  readonly budgetRuleId: string;
  readonly campaignId: string;
}

export interface Inline1090 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1090;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1091 {
  readonly cause?: Inline1091;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1093 {
  readonly errorType: string;
  readonly errorValue: Inline1093;
}

export interface Inline1094 {
  readonly cause?: Inline1094;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1095 {
  readonly cause?: Inline1095;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1096 {
  readonly cause?: Inline1096;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1097 {
  readonly cause?: Inline1097;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1098 {
  readonly cause?: Inline1098;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1099 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1099;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1100 {
  readonly cause?: Inline1100;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1102 {
  readonly billingError?: Inline1102;
  readonly duplicateValueError?: Inline1103;
  readonly entityNotFoundError?: Inline1104;
  readonly entityQuotaError?: Inline1105;
  readonly entityStateError?: Inline1106;
  readonly internalServerError?: Inline1107;
  readonly malformedValueError?: Inline1108;
  readonly missingValueError?: Inline1109;
  readonly otherError?: Inline1110;
  readonly parentEntityError?: Inline1111;
  readonly rangeError?: Inline1112;
  readonly targetingClauseSetupError?: Inline1113;
  readonly throttledError?: Inline1114;
}

export interface Inline1103 {
  readonly cause?: Inline1103;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1104 {
  readonly cause?: Inline1104;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1105 {
  readonly cause?: Inline1105;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1106 {
  readonly cause?: Inline1106;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1107 {
  readonly cause?: Inline1107;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1108 {
  readonly cause?: Inline1108;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1109 {
  readonly cause?: Inline1109;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline111 {
  readonly errorList?: ReadonlyArray<Inline111>;
  readonly successList?: ReadonlyArray<Inline112>;
}

export interface Inline1110 {
  readonly cause?: Inline1110;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1111 {
  readonly cause?: Inline1111;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1112 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1112;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1113 {
  readonly cause?: Inline1113;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1114 {
  readonly cause?: Inline1114;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1116 {
  readonly cause?: Inline1116;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1117 {
  readonly cause?: Inline1117;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1118 {
  readonly cause?: Inline1118;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1119 {
  readonly cause?: Inline1119;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline112 {
  readonly campaignId?: string;
  readonly code?: string;
  readonly details?: string;
  readonly index?: number;
  readonly ruleId?: string;
}

export interface Inline1120 {
  readonly cause?: Inline1120;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1121 {
  readonly cause?: Inline1121;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1122 {
  readonly cause?: Inline1122;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1123 {
  readonly cause?: Inline1123;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1124 {
  readonly cause?: Inline1124;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1125 {
  readonly cause?: Inline1125;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1126 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1126;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1127 {
  readonly cause?: Inline1127;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1128 {
  readonly cause?: Inline1128;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1130 {
  readonly errorType: string;
  readonly errorValue: Inline1130;
}

export interface Inline1131 {
  readonly cause?: Inline1131;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1132 {
  readonly cause?: Inline1132;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1133 {
  readonly cause?: Inline1133;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1134 {
  readonly cause?: Inline1134;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1135 {
  readonly cause?: Inline1135;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1136 {
  readonly cause?: Inline1136;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1137 {
  readonly cause?: Inline1137;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1138 {
  readonly cause?: Inline1138;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1139 {
  readonly cause?: Inline1139;
  readonly message: string;
  readonly reason: string;
}

export interface Inline114 {
  readonly budgetRuleId: string;
  readonly campaignId: string;
}

export interface Inline1140 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1140;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1141 {
  readonly cause?: Inline1141;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1142 {
  readonly cause?: Inline1142;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1148 {
  readonly budget: number;
  readonly budgetType: string;
}

export interface Inline1149 {
  readonly placementBidding?: ReadonlyArray<Inline1149>;
  readonly shopperCohortBidding?: ReadonlyArray<Inline1150>;
  readonly strategy?: string;
}

export interface Inline1150 {
  readonly audienceSegments?: ReadonlyArray<Inline1150>;
  readonly percentage?: number;
  readonly shopperCohortType: string;
}

export interface Inline1151 {
  readonly offAmazonBudgetControlStrategy?: string;
}

export interface Inline1152 {

}

export interface Inline1155 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline116 {
  readonly errorList?: ReadonlyArray<Inline116>;
  readonly successList?: ReadonlyArray<Inline117>;
}

export interface Inline1161 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline1166 {
  readonly percentage?: number;
  readonly placement?: string;
}

export interface Inline1167 {
  readonly audienceSegments?: ReadonlyArray<Inline1167>;
  readonly percentage?: number;
  readonly shopperCohortType: string;
}

export interface Inline117 {
  readonly campaignId?: string;
  readonly code?: string;
  readonly details?: string;
  readonly index?: number;
  readonly ruleId?: string;
}

export interface Inline1176 {
  readonly catalogSourceCountryCode?: string;
}

export interface Inline1179 {
  readonly campaignId: string;
  readonly defaultBid: number;
  readonly name: string;
  readonly state: string;
}

export interface Inline1181 {
  readonly error?: ReadonlyArray<Inline1181>;
  readonly success?: ReadonlyArray<Inline1195>;
}

export interface Inline1182 {
  readonly cause?: Inline1182;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1183 {
  readonly cause?: Inline1183;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1184 {
  readonly cause?: Inline1184;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1185 {
  readonly cause?: Inline1185;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1186 {
  readonly cause?: Inline1186;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1187 {
  readonly cause?: Inline1187;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1188 {
  readonly cause?: Inline1188;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1189 {
  readonly cause?: Inline1189;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1190 {
  readonly cause?: Inline1190;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1191 {
  readonly cause?: Inline1191;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1192 {
  readonly cause?: Inline1192;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1193 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1193;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1194 {
  readonly cause?: Inline1194;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1195 {
  readonly adGroup?: Inline1195;
  readonly adGroupId?: string;
  readonly index: number;
}

export interface Inline1197 {
  readonly campaignId: string;
  readonly keywordText: string;
  readonly matchType: string;
  readonly state: string;
}

export interface Inline1199 {
  readonly error?: ReadonlyArray<Inline1199>;
  readonly success?: ReadonlyArray<Inline1211>;
}

export interface Inline12 {
  readonly percentage?: number;
  readonly predicate?: string;
}

export interface Inline1200 {
  readonly cause?: Inline1200;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1201 {
  readonly cause?: Inline1201;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1202 {
  readonly cause?: Inline1202;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1203 {
  readonly cause?: Inline1203;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1204 {
  readonly cause?: Inline1204;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1205 {
  readonly cause?: Inline1205;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1206 {
  readonly cause?: Inline1206;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1207 {
  readonly cause?: Inline1207;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1208 {
  readonly cause?: Inline1208;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1209 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1209;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1210 {
  readonly cause?: Inline1210;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1211 {
  readonly campaignNegativeKeyword?: Inline1211;
  readonly campaignNegativeKeywordId?: string;
  readonly index: number;
}

export interface Inline1213 {
  readonly campaignId: string;
  readonly expression: ReadonlyArray<Inline1213>;
  readonly state: string;
}

export interface Inline1215 {
  readonly error?: ReadonlyArray<Inline1215>;
  readonly success?: ReadonlyArray<Inline1228>;
}

export interface Inline1216 {
  readonly cause?: Inline1216;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1217 {
  readonly cause?: Inline1217;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1218 {
  readonly cause?: Inline1218;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1219 {
  readonly cause?: Inline1219;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline122 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline1220 {
  readonly cause?: Inline1220;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1221 {
  readonly cause?: Inline1221;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1222 {
  readonly cause?: Inline1222;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1223 {
  readonly cause?: Inline1223;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1224 {
  readonly cause?: Inline1224;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1225 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1225;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1226 {
  readonly cause?: Inline1226;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1227 {
  readonly cause?: Inline1227;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1228 {
  readonly campaignNegativeTargetingClauseId?: string;
  readonly campaignNegativeTargetingClauses?: Inline1228;
  readonly index: number;
}

export interface Inline1229 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline1229>;
}

export interface Inline1230 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline1232 {
  readonly autoManageCampaign?: boolean;
  readonly budget: Inline1232;
  readonly dynamicBidding?: Inline1233;
  readonly endDate?: string;
  readonly name: string;
  readonly offAmazonSettings?: Inline1235;
  readonly portfolioId?: string;
  readonly siteRestrictions?: ReadonlyArray<string>;
  readonly startDate?: string;
  readonly state: string;
  readonly tags?: Inline1236;
  readonly targetingType: string;
}

export interface Inline1233 {
  readonly placementBidding?: ReadonlyArray<Inline1233>;
  readonly shopperCohortBidding?: ReadonlyArray<Inline1234>;
  readonly strategy?: string;
}

export interface Inline1234 {
  readonly audienceSegments?: ReadonlyArray<Inline1234>;
  readonly percentage?: number;
  readonly shopperCohortType: string;
}

export interface Inline1235 {
  readonly offAmazonBudgetControlStrategy?: string;
}

export interface Inline1236 {

}

export interface Inline1238 {
  readonly error?: ReadonlyArray<Inline1238>;
  readonly success?: ReadonlyArray<Inline1254>;
}

export interface Inline1239 {
  readonly cause?: Inline1239;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1240 {
  readonly cause?: Inline1240;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1241 {
  readonly cause?: Inline1241;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1242 {
  readonly cause?: Inline1242;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1243 {
  readonly cause?: Inline1243;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1244 {
  readonly cause?: Inline1244;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1245 {
  readonly cause?: Inline1245;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1246 {
  readonly cause?: Inline1246;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1247 {
  readonly cause?: Inline1247;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1248 {
  readonly cause?: Inline1248;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1249 {
  readonly cause?: Inline1249;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline125 {
  readonly action?: string;
  readonly suggestedBiddingStrategy?: string;
}

export interface Inline1250 {
  readonly cause?: Inline1250;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1251 {
  readonly cause?: Inline1251;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1252 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1252;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1253 {
  readonly cause?: Inline1253;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1254 {
  readonly campaign?: Inline1254;
  readonly campaignId?: string;
  readonly index: number;
}

export interface Inline1255 {
  readonly placementBidding?: ReadonlyArray<Inline1255>;
  readonly shopperCohortBidding?: ReadonlyArray<Inline1256>;
  readonly strategy: string;
}

export interface Inline1256 {
  readonly audienceSegments?: ReadonlyArray<Inline1256>;
  readonly percentage?: number;
  readonly shopperCohortType: string;
}

export interface Inline1257 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline1257>;
}

export interface Inline1258 {
  readonly offAmazonBudgetControlStrategy?: string;
}

export interface Inline1259 {

}

export interface Inline126 {
  readonly action?: string;
  readonly suggestedBudget?: number;
}

export interface Inline1261 {
  readonly adGroupId: string;
  readonly bid?: number;
  readonly campaignId: string;
  readonly keywordText: string;
  readonly matchType: string;
  readonly nativeLanguageKeyword?: string;
  readonly nativeLanguageLocale?: string;
  readonly state: string;
}

export interface Inline1263 {
  readonly error?: ReadonlyArray<Inline1263>;
  readonly success?: ReadonlyArray<Inline1278>;
}

export interface Inline1264 {
  readonly cause?: Inline1264;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1265 {
  readonly cause?: Inline1265;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1266 {
  readonly cause?: Inline1266;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1267 {
  readonly cause?: Inline1267;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1268 {
  readonly cause?: Inline1268;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1269 {
  readonly cause?: Inline1269;
  readonly message: string;
  readonly reason: string;
}

export interface Inline127 {
  readonly action?: string;
  readonly adGroupId?: string;
  readonly keywordId?: string;
  readonly keywordText?: string;
  readonly matchType?: string;
  readonly suggestedBid?: number;
}

export interface Inline1270 {
  readonly cause?: Inline1270;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1271 {
  readonly cause?: Inline1271;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1272 {
  readonly cause?: Inline1272;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1273 {
  readonly cause?: Inline1273;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1274 {
  readonly cause?: Inline1274;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1275 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1275;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1276 {
  readonly cause?: Inline1276;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1277 {
  readonly cause?: Inline1277;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1278 {
  readonly index: number;
  readonly keyword?: Inline1278;
  readonly keywordId?: string;
}

export interface Inline128 {
  readonly action?: string;
  readonly incrementalImpressionsLowerPercent?: number;
  readonly incrementalImpressionsUpperPercent?: number;
  readonly placementType?: string;
  readonly suggestedBidAdjustment?: number;
}

export interface Inline1280 {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly keywordText: string;
  readonly matchType: string;
  readonly nativeLanguageKeyword?: string;
  readonly nativeLanguageLocale?: string;
  readonly state: string;
}

export interface Inline1282 {
  readonly error?: ReadonlyArray<Inline1282>;
  readonly success?: ReadonlyArray<Inline1295>;
}

export interface Inline1283 {
  readonly cause?: Inline1283;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1284 {
  readonly cause?: Inline1284;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1285 {
  readonly cause?: Inline1285;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1286 {
  readonly cause?: Inline1286;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1287 {
  readonly cause?: Inline1287;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1288 {
  readonly cause?: Inline1288;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1289 {
  readonly cause?: Inline1289;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline129 {
  readonly endDate?: string;
  readonly estimatedIncrementalClicksLower?: number;
  readonly estimatedIncrementalClicksUpper?: number;
  readonly startDate?: string;
}

export interface Inline1290 {
  readonly cause?: Inline1290;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1291 {
  readonly cause?: Inline1291;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1292 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1292;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1293 {
  readonly cause?: Inline1293;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1294 {
  readonly cause?: Inline1294;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1295 {
  readonly index: number;
  readonly negativeKeyword?: Inline1295;
  readonly negativeKeywordId?: string;
}

export interface Inline1297 {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly expression: ReadonlyArray<Inline1297>;
  readonly state: string;
}

export interface Inline1299 {
  readonly error?: ReadonlyArray<Inline1299>;
  readonly success?: ReadonlyArray<Inline1312>;
}

export interface Inline130 {
  readonly action?: string;
  readonly adGroupId?: string;
  readonly suggestedBid?: number;
  readonly targetId?: string;
  readonly targetingGroupExpression?: string;
}

export interface Inline1300 {
  readonly cause?: Inline1300;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1301 {
  readonly cause?: Inline1301;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1302 {
  readonly cause?: Inline1302;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1303 {
  readonly cause?: Inline1303;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1304 {
  readonly cause?: Inline1304;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1305 {
  readonly cause?: Inline1305;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1306 {
  readonly cause?: Inline1306;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1307 {
  readonly cause?: Inline1307;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1308 {
  readonly cause?: Inline1308;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1309 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1309;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1310 {
  readonly cause?: Inline1310;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1311 {
  readonly cause?: Inline1311;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1312 {
  readonly index: number;
  readonly negativeTargetingClause?: Inline1312;
  readonly targetId?: string;
}

export interface Inline1313 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline1313>;
}

export interface Inline1314 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline1316 {
  readonly adGroupId: string;
  readonly asin?: string;
  readonly campaignId: string;
  readonly customText?: string;
  readonly globalStoreSetting?: Inline1316;
  readonly sku?: string;
  readonly state: string;
}

export interface Inline1318 {
  readonly error?: ReadonlyArray<Inline1318>;
  readonly success?: ReadonlyArray<Inline1334>;
}

export interface Inline1319 {
  readonly cause?: Inline1319;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1320 {
  readonly cause?: Inline1320;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1321 {
  readonly cause?: Inline1321;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1322 {
  readonly cause?: Inline1322;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1323 {
  readonly cause?: Inline1323;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1324 {
  readonly cause?: Inline1324;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1325 {
  readonly cause?: Inline1325;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1326 {
  readonly cause?: Inline1326;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1327 {
  readonly cause?: Inline1327;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1328 {
  readonly cause?: Inline1328;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1329 {
  readonly cause?: Inline1329;
  readonly message: string;
  readonly reason: string;
}

export interface Inline133 {
  readonly max?: number;
  readonly min?: number;
}

export interface Inline1330 {
  readonly cause?: Inline1330;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1331 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1331;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1332 {
  readonly cause?: Inline1332;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1333 {
  readonly cause?: Inline1333;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1334 {
  readonly adId?: string;
  readonly index: number;
  readonly productAd?: Inline1334;
}

export interface Inline1335 {
  readonly catalogSourceCountryCode?: string;
}

export interface Inline1337 {
  readonly adGroupId: string;
  readonly bid?: number;
  readonly campaignId: string;
  readonly expression: ReadonlyArray<Inline1337>;
  readonly expressionType: string;
  readonly state: string;
}

export interface Inline1339 {
  readonly error?: ReadonlyArray<Inline1339>;
  readonly success?: ReadonlyArray<Inline1354>;
}

export interface Inline1340 {
  readonly cause?: Inline1340;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1341 {
  readonly cause?: Inline1341;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1342 {
  readonly cause?: Inline1342;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1343 {
  readonly cause?: Inline1343;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1344 {
  readonly cause?: Inline1344;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1345 {
  readonly cause?: Inline1345;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1346 {
  readonly cause?: Inline1346;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1347 {
  readonly cause?: Inline1347;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1348 {
  readonly cause?: Inline1348;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1349 {
  readonly cause?: Inline1349;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline135 {
  readonly max?: number;
  readonly min?: number;
}

export interface Inline1350 {
  readonly cause?: Inline1350;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1351 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1351;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1352 {
  readonly cause?: Inline1352;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1353 {
  readonly cause?: Inline1353;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1354 {
  readonly index: number;
  readonly targetId?: string;
  readonly targetingClause?: Inline1354;
}

export interface Inline1355 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline1355>;
}

export interface Inline1356 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline1359 {
  readonly biddingError: Inline1359;
}

export interface Inline1360 {
  readonly billingError: Inline1360;
}

export interface Inline1361 {
  readonly duplicateValueError: Inline1361;
}

export interface Inline1362 {
  readonly entityNotFoundError: Inline1362;
}

export interface Inline1363 {
  readonly entityQuotaError: Inline1363;
}

export interface Inline1364 {
  readonly entityStateError: Inline1364;
}

export interface Inline1365 {
  readonly expressionTypeError: Inline1365;
}

export interface Inline1366 {
  readonly localeError: Inline1366;
}

export interface Inline1367 {
  readonly malformedValueError: Inline1367;
}

export interface Inline1368 {
  readonly missingValueError: Inline1368;
}

export interface Inline1369 {
  readonly parentEntityError: Inline1369;
}

export interface Inline137 {
  readonly canBeTargeted?: boolean;
  readonly id?: string;
  readonly name?: string;
  readonly parent?: string;
  readonly path?: string;
}

export interface Inline1370 {
  readonly rangeError: Inline1370;
}

export interface Inline1371 {
  readonly otherError: Inline1371;
}

export interface Inline1372 {
  readonly internalServerError: Inline1372;
}

export interface Inline1373 {
  readonly invalidInputError: Inline1373;
}

export interface Inline1374 {
  readonly throttledError: Inline1374;
}

export interface Inline1375 {
  readonly targetingClauseSetupError: Inline1375;
}

export interface Inline1377 {
  readonly biddingError: Inline1377;
}

export interface Inline1378 {
  readonly billingError: Inline1378;
}

export interface Inline1379 {
  readonly duplicateValueError: Inline1379;
}

export interface Inline1380 {
  readonly entityNotFoundError: Inline1380;
}

export interface Inline1381 {
  readonly entityQuotaError: Inline1381;
}

export interface Inline1382 {
  readonly entityStateError: Inline1382;
}

export interface Inline1383 {
  readonly expressionTypeError: Inline1383;
}

export interface Inline1384 {
  readonly localeError: Inline1384;
}

export interface Inline1385 {
  readonly malformedValueError: Inline1385;
}

export interface Inline1386 {
  readonly missingValueError: Inline1386;
}

export interface Inline1387 {
  readonly parentEntityError: Inline1387;
}

export interface Inline1388 {
  readonly rangeError: Inline1388;
}

export interface Inline1389 {
  readonly otherError: Inline1389;
}

export interface Inline139 {
  readonly asinCounts?: Inline139;
  readonly categoryPath?: string;
  readonly id?: string;
  readonly name?: string;
  readonly parentCategoryId?: string;
}

export interface Inline1390 {
  readonly internalServerError: Inline1390;
}

export interface Inline1391 {
  readonly invalidInputError: Inline1391;
}

export interface Inline1392 {
  readonly throttledError: Inline1392;
}

export interface Inline1393 {
  readonly targetingClauseSetupError: Inline1393;
}

export interface Inline1395 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline1399 {
  readonly keywordCampaignAdGroupIds?: ReadonlyArray<string>;
  readonly productCampaignAdGroupIds?: ReadonlyArray<string>;
}

export interface Inline1400 {
  readonly budget: Inline1400;
  readonly defaultBid: number;
  readonly dynamicBidding?: Inline1401;
  readonly endDate?: string;
  readonly namePrefix: string;
  readonly startDate?: string;
  readonly tags?: Inline1402;
}

export interface Inline1401 {
  readonly placementBidding?: ReadonlyArray<Inline1401>;
  readonly strategy: string;
}

export interface Inline1402 {

}

export interface Inline1404 {
  readonly autoTargetingCampaignAdGroupId?: string;
  readonly autoTargetingCampaignAdIds?: ReadonlyArray<string>;
  readonly keywordCampaignAdGroupIds?: ReadonlyArray<string>;
  readonly productCampaignAdGroupIds?: ReadonlyArray<string>;
  readonly state?: string;
  readonly targetPromotionGroupId?: string;
  readonly targetPromotionGroupName?: string;
}

export interface Inline1406 {
  readonly adGroupId: string;
}

export interface Inline1407 {
  readonly adGroups: ReadonlyArray<Inline1407>;
  readonly budget: Inline1408;
  readonly campaignName: string;
  readonly dynamicBidding?: Inline1409;
  readonly endDate?: string;
  readonly startDate?: string;
  readonly tags?: Inline1410;
}

export interface Inline1408 {
  readonly budget: number;
  readonly budgetType: string;
}

export interface Inline1409 {
  readonly placementBidding?: ReadonlyArray<Inline1409>;
  readonly strategy: string;
}

export interface Inline141 {
  readonly asinCounts?: Inline141;
  readonly categoryPath?: string;
  readonly id?: string;
  readonly name?: string;
  readonly parentCategoryId?: string;
  readonly translatedCategoryPath?: string;
  readonly translatedName?: string;
}

export interface Inline1410 {

}

export interface Inline1412 {
  readonly adIds?: ReadonlyArray<string>;
  readonly destinationAdGroups?: ReadonlyArray<Inline1412>;
  readonly sourceAdGroupId?: string;
  readonly sourceCampaignId?: string;
  readonly state?: string;
  readonly targetPromotionGroupId?: string;
  readonly targetPromotionGroupName?: string;
}

export interface Inline1414 {
  readonly errorCode?: string;
  readonly errorMessage?: string;
}

export interface Inline1416 {
  readonly keywordTargetDetailsV2: Inline1416;
}

export interface Inline1417 {
  readonly productTargetDetailsV2: Inline1417;
}

export interface Inline1419 {
  readonly errorType?: string;
  readonly errorValue?: Inline1419 | Inline1420 | Inline1421 | Inline1422 | Inline1423 | Inline1424 | Inline1425 | Inline1426 | Inline1427 | Inline1428 | Inline1429 | Inline1430 | Inline1431 | Inline1432 | Inline1433 | Inline1434 | Inline1435;
}

export interface Inline1420 {
  readonly billingError: Inline1420;
}

export interface Inline1421 {
  readonly duplicateValueError: Inline1421;
}

export interface Inline1422 {
  readonly entityNotFoundError: Inline1422;
}

export interface Inline1423 {
  readonly entityQuotaError: Inline1423;
}

export interface Inline1424 {
  readonly entityStateError: Inline1424;
}

export interface Inline1425 {
  readonly expressionTypeError: Inline1425;
}

export interface Inline1426 {
  readonly localeError: Inline1426;
}

export interface Inline1427 {
  readonly malformedValueError: Inline1427;
}

export interface Inline1428 {
  readonly missingValueError: Inline1428;
}

export interface Inline1429 {
  readonly parentEntityError: Inline1429;
}

export interface Inline1430 {
  readonly rangeError: Inline1430;
}

export interface Inline1431 {
  readonly otherError: Inline1431;
}

export interface Inline1432 {
  readonly internalServerError: Inline1432;
}

export interface Inline1433 {
  readonly invalidInputError: Inline1433;
}

export interface Inline1434 {
  readonly throttledError: Inline1434;
}

export interface Inline1435 {
  readonly targetingClauseSetupError: Inline1435;
}

export interface Inline1437 {
  readonly bid?: number;
  readonly expressionType: string;
  readonly target: string;
}

export interface Inline1439 {
  readonly errors?: ReadonlyArray<Inline1439>;
  readonly expressionType?: string;
  readonly target?: string;
}

export interface Inline1440 {
  readonly billingError: Inline1440;
}

export interface Inline1441 {
  readonly duplicateValueError: Inline1441;
}

export interface Inline1442 {
  readonly entityNotFoundError: Inline1442;
}

export interface Inline1443 {
  readonly entityQuotaError: Inline1443;
}

export interface Inline1444 {
  readonly entityStateError: Inline1444;
}

export interface Inline1445 {
  readonly expressionTypeError: Inline1445;
}

export interface Inline1446 {
  readonly localeError: Inline1446;
}

export interface Inline1447 {
  readonly malformedValueError: Inline1447;
}

export interface Inline1448 {
  readonly missingValueError: Inline1448;
}

export interface Inline1449 {
  readonly parentEntityError: Inline1449;
}

export interface Inline1450 {
  readonly rangeError: Inline1450;
}

export interface Inline1451 {
  readonly otherError: Inline1451;
}

export interface Inline1452 {
  readonly internalServerError: Inline1452;
}

export interface Inline1453 {
  readonly invalidInputError: Inline1453;
}

export interface Inline1454 {
  readonly throttledError: Inline1454;
}

export interface Inline1455 {
  readonly targetingClauseSetupError: Inline1455;
}

export interface Inline1456 {
  readonly expressionType?: string;
  readonly target?: string;
  readonly targetDetails?: Inline1456;
}

export interface Inline1458 {
  readonly manualTargetingAdGroupId?: string;
  readonly targetId?: string;
  readonly targetPromotionGroupId?: string;
}

export interface Inline1460 {
  readonly keywordTarget: Inline1460;
}

export interface Inline1461 {
  readonly productTarget: Inline1461;
}

export interface Inline1463 {
  readonly index?: string;
  readonly subErrors?: ReadonlyArray<Inline1463>;
}

export interface Inline1464 {
  readonly index?: string;
  readonly targetDetails?: Inline1464 | Inline1465;
}

export interface Inline1465 {
  readonly productTargetDetailsV2: Inline1465;
}

export interface Inline1468 {
  readonly keywordTarget: Inline1468;
}

export interface Inline1469 {
  readonly productTarget: Inline1469;
}

export interface Inline1471 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline1474 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline1477 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1479 {
  readonly error?: ReadonlyArray<Inline1479>;
  readonly success?: ReadonlyArray<Inline1493>;
}

export interface Inline148 {

}

export interface Inline1480 {
  readonly cause?: Inline1480;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1481 {
  readonly cause?: Inline1481;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1482 {
  readonly cause?: Inline1482;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1483 {
  readonly cause?: Inline1483;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1484 {
  readonly cause?: Inline1484;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1485 {
  readonly cause?: Inline1485;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1486 {
  readonly cause?: Inline1486;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1487 {
  readonly cause?: Inline1487;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1488 {
  readonly cause?: Inline1488;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1489 {
  readonly cause?: Inline1489;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1490 {
  readonly cause?: Inline1490;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1491 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1491;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1492 {
  readonly cause?: Inline1492;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1493 {
  readonly adGroup?: Inline1493;
  readonly adGroupId?: string;
  readonly index: number;
}

export interface Inline1495 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1497 {
  readonly error?: ReadonlyArray<Inline1497>;
  readonly success?: ReadonlyArray<Inline1509>;
}

export interface Inline1498 {
  readonly cause?: Inline1498;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1499 {
  readonly cause?: Inline1499;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1500 {
  readonly cause?: Inline1500;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1501 {
  readonly cause?: Inline1501;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1502 {
  readonly cause?: Inline1502;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1503 {
  readonly cause?: Inline1503;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1504 {
  readonly cause?: Inline1504;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1505 {
  readonly cause?: Inline1505;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1506 {
  readonly cause?: Inline1506;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1507 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1507;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1508 {
  readonly cause?: Inline1508;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1509 {
  readonly campaignNegativeKeyword?: Inline1509;
  readonly campaignNegativeKeywordId?: string;
  readonly index: number;
}

export interface Inline151 {
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}

export interface Inline1511 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1513 {
  readonly error?: ReadonlyArray<Inline1513>;
  readonly success?: ReadonlyArray<Inline1526>;
}

export interface Inline1514 {
  readonly cause?: Inline1514;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1515 {
  readonly cause?: Inline1515;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1516 {
  readonly cause?: Inline1516;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1517 {
  readonly cause?: Inline1517;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1518 {
  readonly cause?: Inline1518;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1519 {
  readonly cause?: Inline1519;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1520 {
  readonly cause?: Inline1520;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1521 {
  readonly cause?: Inline1521;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1522 {
  readonly cause?: Inline1522;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1523 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1523;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1524 {
  readonly cause?: Inline1524;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1525 {
  readonly cause?: Inline1525;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1526 {
  readonly campaignNegativeTargetingClauseId?: string;
  readonly campaignNegativeTargetingClauses?: Inline1526;
  readonly index: number;
}

export interface Inline1527 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline1527>;
}

export interface Inline1528 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline153 {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}

export interface Inline1530 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1532 {
  readonly error?: ReadonlyArray<Inline1532>;
  readonly success?: ReadonlyArray<Inline1548>;
}

export interface Inline1533 {
  readonly cause?: Inline1533;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1534 {
  readonly cause?: Inline1534;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1535 {
  readonly cause?: Inline1535;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1536 {
  readonly cause?: Inline1536;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1537 {
  readonly cause?: Inline1537;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1538 {
  readonly cause?: Inline1538;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1539 {
  readonly cause?: Inline1539;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1540 {
  readonly cause?: Inline1540;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1541 {
  readonly cause?: Inline1541;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1542 {
  readonly cause?: Inline1542;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1543 {
  readonly cause?: Inline1543;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1544 {
  readonly cause?: Inline1544;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1545 {
  readonly cause?: Inline1545;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1546 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1546;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1547 {
  readonly cause?: Inline1547;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1548 {
  readonly campaign?: Inline1548;
  readonly campaignId?: string;
  readonly index: number;
}

export interface Inline1549 {
  readonly placementBidding?: ReadonlyArray<Inline1549>;
  readonly shopperCohortBidding?: ReadonlyArray<Inline1550>;
  readonly strategy: string;
}

export interface Inline155 {
  readonly budgetIncreaseBy?: Inline155;
  readonly duration?: Inline156;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline158;
  readonly recurrence?: Inline159;
  readonly ruleType?: string;
}

export interface Inline1550 {
  readonly audienceSegments?: ReadonlyArray<Inline1550>;
  readonly percentage?: number;
  readonly shopperCohortType: string;
}

export interface Inline1551 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline1551>;
}

export interface Inline1552 {
  readonly offAmazonBudgetControlStrategy?: string;
}

export interface Inline1553 {

}

export interface Inline1555 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1557 {
  readonly error?: ReadonlyArray<Inline1557>;
  readonly success?: ReadonlyArray<Inline1572>;
}

export interface Inline1558 {
  readonly cause?: Inline1558;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1559 {
  readonly cause?: Inline1559;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline156 {
  readonly dateRangeTypeRuleDuration?: Inline156;
  readonly eventTypeRuleDuration?: Inline157;
}

export interface Inline1560 {
  readonly cause?: Inline1560;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1561 {
  readonly cause?: Inline1561;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1562 {
  readonly cause?: Inline1562;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1563 {
  readonly cause?: Inline1563;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1564 {
  readonly cause?: Inline1564;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1565 {
  readonly cause?: Inline1565;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1566 {
  readonly cause?: Inline1566;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1567 {
  readonly cause?: Inline1567;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1568 {
  readonly cause?: Inline1568;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1569 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1569;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline157 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline1570 {
  readonly cause?: Inline1570;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1571 {
  readonly cause?: Inline1571;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1572 {
  readonly index: number;
  readonly keyword?: Inline1572;
  readonly keywordId?: string;
}

export interface Inline1574 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1576 {
  readonly error?: ReadonlyArray<Inline1576>;
  readonly success?: ReadonlyArray<Inline1589>;
}

export interface Inline1577 {
  readonly cause?: Inline1577;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1578 {
  readonly cause?: Inline1578;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1579 {
  readonly cause?: Inline1579;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline158 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline1580 {
  readonly cause?: Inline1580;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1581 {
  readonly cause?: Inline1581;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1582 {
  readonly cause?: Inline1582;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1583 {
  readonly cause?: Inline1583;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1584 {
  readonly cause?: Inline1584;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1585 {
  readonly cause?: Inline1585;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1586 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1586;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1587 {
  readonly cause?: Inline1587;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1588 {
  readonly cause?: Inline1588;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1589 {
  readonly index: number;
  readonly negativeKeyword?: Inline1589;
  readonly negativeKeywordId?: string;
}

export interface Inline159 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline159>;
  readonly type?: string;
}

export interface Inline1591 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1593 {
  readonly error?: ReadonlyArray<Inline1593>;
  readonly success?: ReadonlyArray<Inline1606>;
}

export interface Inline1594 {
  readonly cause?: Inline1594;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1595 {
  readonly cause?: Inline1595;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1596 {
  readonly cause?: Inline1596;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1597 {
  readonly cause?: Inline1597;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1598 {
  readonly cause?: Inline1598;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1599 {
  readonly cause?: Inline1599;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline16 {
  readonly id?: string;
  readonly name?: string;
}

export interface Inline1600 {
  readonly cause?: Inline1600;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1601 {
  readonly cause?: Inline1601;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1602 {
  readonly cause?: Inline1602;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1603 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1603;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1604 {
  readonly cause?: Inline1604;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1605 {
  readonly cause?: Inline1605;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1606 {
  readonly index: number;
  readonly negativeTargetingClause?: Inline1606;
  readonly targetId?: string;
}

export interface Inline1607 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline1607>;
}

export interface Inline1608 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline161 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline1610 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1612 {
  readonly error?: ReadonlyArray<Inline1612>;
  readonly success?: ReadonlyArray<Inline1628>;
}

export interface Inline1613 {
  readonly cause?: Inline1613;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1614 {
  readonly cause?: Inline1614;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1615 {
  readonly cause?: Inline1615;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1616 {
  readonly cause?: Inline1616;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1617 {
  readonly cause?: Inline1617;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1618 {
  readonly cause?: Inline1618;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1619 {
  readonly cause?: Inline1619;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1620 {
  readonly cause?: Inline1620;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1621 {
  readonly cause?: Inline1621;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1622 {
  readonly cause?: Inline1622;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1623 {
  readonly cause?: Inline1623;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1624 {
  readonly cause?: Inline1624;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1625 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1625;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1626 {
  readonly cause?: Inline1626;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1627 {
  readonly cause?: Inline1627;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1628 {
  readonly adId?: string;
  readonly index: number;
  readonly productAd?: Inline1628;
}

export interface Inline1629 {
  readonly catalogSourceCountryCode?: string;
}

export interface Inline1631 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1633 {
  readonly error?: ReadonlyArray<Inline1633>;
  readonly success?: ReadonlyArray<Inline1648>;
}

export interface Inline1634 {
  readonly cause?: Inline1634;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1635 {
  readonly cause?: Inline1635;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1636 {
  readonly cause?: Inline1636;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1637 {
  readonly cause?: Inline1637;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1638 {
  readonly cause?: Inline1638;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1639 {
  readonly cause?: Inline1639;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1640 {
  readonly cause?: Inline1640;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1641 {
  readonly cause?: Inline1641;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1642 {
  readonly cause?: Inline1642;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1643 {
  readonly cause?: Inline1643;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1644 {
  readonly cause?: Inline1644;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1645 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1645;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1646 {
  readonly cause?: Inline1646;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1647 {
  readonly cause?: Inline1647;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1648 {
  readonly index: number;
  readonly targetId?: string;
  readonly targetingClause?: Inline1648;
}

export interface Inline1649 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline1649>;
}

export interface Inline1650 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline1652 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline1655 {
  readonly percentage?: number;
  readonly placement?: string;
}

export interface Inline1656 {
  readonly audienceSegments?: ReadonlyArray<Inline1656>;
  readonly percentage?: number;
  readonly shopperCohortType: string;
}

export interface Inline1658 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline1661 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline1664 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline1674 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline1679 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1680 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1681 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1683 {
  readonly adAsin?: string;
  readonly adGroupId?: string;
  readonly adId?: string;
  readonly campaignId?: string;
  readonly recommendationReasons?: ReadonlyArray<Inline1683>;
  readonly recommendedTarget?: string;
  readonly targetType?: string;
}

export interface Inline1687 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline1694 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline1697 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline1697>;
}

export interface Inline1699 {
  readonly entityNotFoundError?: Inline1699;
  readonly internalServerError?: Inline1700;
  readonly invalidInputError?: Inline1701;
  readonly localeError?: Inline1702;
  readonly malformedValueError?: Inline1703;
  readonly missingValueError?: Inline1704;
  readonly otherError?: Inline1705;
  readonly rangeError?: Inline1706;
  readonly throttledError?: Inline1707;
}

export interface Inline1700 {
  readonly cause?: Inline1700;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1701 {
  readonly cause?: Inline1701;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1702 {
  readonly cause?: Inline1702;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1703 {
  readonly cause?: Inline1703;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1704 {
  readonly cause?: Inline1704;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1705 {
  readonly cause?: Inline1705;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1706 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1706;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1707 {
  readonly cause?: Inline1707;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1709 {
  readonly cause?: Inline1709;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1710 {
  readonly cause?: Inline1710;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1711 {
  readonly cause?: Inline1711;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1712 {
  readonly cause?: Inline1712;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1713 {
  readonly cause?: Inline1713;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1714 {
  readonly cause?: Inline1714;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1715 {
  readonly cause?: Inline1715;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1716 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1716;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1717 {
  readonly cause?: Inline1717;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1719 {
  readonly errorType: string;
  readonly errorValue: Inline1719;
}

export interface Inline172 {
  readonly id?: string;
  readonly name?: string;
}

export interface Inline1720 {
  readonly cause?: Inline1720;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1721 {
  readonly cause?: Inline1721;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1722 {
  readonly cause?: Inline1722;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1723 {
  readonly cause?: Inline1723;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1724 {
  readonly cause?: Inline1724;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1725 {
  readonly cause?: Inline1725;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1726 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1726;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1727 {
  readonly cause?: Inline1727;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1729 {
  readonly helpUrl?: string;
  readonly message?: string;
  readonly name?: string;
}

export interface Inline1731 {
  readonly errorType: string;
  readonly errorValue: Inline1731;
}

export interface Inline1732 {
  readonly cause?: Inline1732;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1733 {
  readonly cause?: Inline1733;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1734 {
  readonly cause?: Inline1734;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1735 {
  readonly cause?: Inline1735;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1736 {
  readonly cause?: Inline1736;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1737 {
  readonly cause?: Inline1737;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1738 {
  readonly cause?: Inline1738;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1739 {
  readonly cause?: Inline1739;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline174 {
  readonly id?: string;
  readonly name?: string;
  readonly translatedName?: string;
}

export interface Inline1740 {
  readonly cause?: Inline1740;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1741 {
  readonly cause?: Inline1741;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1742 {
  readonly cause?: Inline1742;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1743 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1743;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1744 {
  readonly cause?: Inline1744;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1745 {
  readonly cause?: Inline1745;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1748 {
  readonly biddingError?: Inline1748;
  readonly billingError?: Inline1749;
  readonly duplicateValueError?: Inline1750;
  readonly entityNotFoundError?: Inline1751;
  readonly entityQuotaError?: Inline1752;
  readonly entityStateError?: Inline1753;
  readonly internalServerError?: Inline1754;
  readonly localeError?: Inline1755;
  readonly malformedValueError?: Inline1756;
  readonly missingValueError?: Inline1757;
  readonly otherError?: Inline1758;
  readonly parentEntityError?: Inline1759;
  readonly rangeError?: Inline1760;
  readonly targetingClauseSetupError?: Inline1761;
  readonly throttledError?: Inline1762;
}

export interface Inline1749 {
  readonly cause?: Inline1749;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1750 {
  readonly cause?: Inline1750;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1751 {
  readonly cause?: Inline1751;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1752 {
  readonly cause?: Inline1752;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1753 {
  readonly cause?: Inline1753;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1754 {
  readonly cause?: Inline1754;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1755 {
  readonly cause?: Inline1755;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1756 {
  readonly cause?: Inline1756;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1757 {
  readonly cause?: Inline1757;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1758 {
  readonly cause?: Inline1758;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1759 {
  readonly cause?: Inline1759;
  readonly message: string;
  readonly reason: string;
}

export interface Inline176 {
  readonly campaignId: string;
  readonly recommendationType: string;
}

export interface Inline1760 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1760;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1761 {
  readonly cause?: Inline1761;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1762 {
  readonly cause?: Inline1762;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1764 {
  readonly cause?: Inline1764;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1765 {
  readonly cause?: Inline1765;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1766 {
  readonly cause?: Inline1766;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1767 {
  readonly cause?: Inline1767;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1768 {
  readonly cause?: Inline1768;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1769 {
  readonly cause?: Inline1769;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1770 {
  readonly cause?: Inline1770;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1771 {
  readonly cause?: Inline1771;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1772 {
  readonly cause?: Inline1772;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1773 {
  readonly cause?: Inline1773;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1774 {
  readonly cause?: Inline1774;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1775 {
  readonly cause?: Inline1775;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1776 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1776;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1777 {
  readonly cause?: Inline1777;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1778 {
  readonly cause?: Inline1778;
  readonly message: string;
  readonly reason: string;
}

export interface Inline178 {
  readonly biddingStrategyRecommendation?: Inline178;
  readonly budgetRecommendation?: Inline179;
  readonly campaignId?: string;
  readonly keywordTargetingRecommendations?: ReadonlyArray<Inline180>;
  readonly placementBiddingRecommendations?: ReadonlyArray<Inline181>;
  readonly sevenDaysEstimatedOpportunities?: Inline182;
  readonly targetingGroupBidRecommendations?: ReadonlyArray<Inline183>;
}

export interface Inline1780 {
  readonly errorType: string;
  readonly errorValue: Inline1780;
}

export interface Inline1781 {
  readonly cause?: Inline1781;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1782 {
  readonly cause?: Inline1782;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1783 {
  readonly cause?: Inline1783;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1784 {
  readonly cause?: Inline1784;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1785 {
  readonly cause?: Inline1785;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1786 {
  readonly cause?: Inline1786;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1787 {
  readonly cause?: Inline1787;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1788 {
  readonly cause?: Inline1788;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1789 {
  readonly cause?: Inline1789;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline179 {
  readonly action?: string;
  readonly suggestedBudget?: number;
}

export interface Inline1790 {
  readonly cause?: Inline1790;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1791 {
  readonly cause?: Inline1791;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1792 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1792;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1793 {
  readonly cause?: Inline1793;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1794 {
  readonly cause?: Inline1794;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1799 {
  readonly adGroupId: string;
  readonly bid?: number;
  readonly campaignId: string;
  readonly extendedData?: Inline1799;
  readonly globalKeywordId?: string;
  readonly keywordId: string;
  readonly keywordText: string;
  readonly matchType: string;
  readonly nativeLanguageKeyword?: string;
  readonly nativeLanguageLocale?: string;
  readonly state: string;
}

export interface Inline18 {
  readonly id?: string;
  readonly name?: string;
  readonly translatedName?: string;
}

export interface Inline180 {
  readonly action?: string;
  readonly adGroupId?: string;
  readonly keywordId?: string;
  readonly keywordText?: string;
  readonly matchType?: string;
  readonly suggestedBid?: number;
}

export interface Inline1803 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1804 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1805 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline1806 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1808 {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly defaultBid: number;
  readonly extendedData?: Inline1808;
  readonly globalAdGroupId?: string;
  readonly name: string;
  readonly state: string;
}

export interface Inline181 {
  readonly action?: string;
  readonly incrementalImpressionsLowerPercent?: number;
  readonly incrementalImpressionsUpperPercent?: number;
  readonly placementType?: string;
  readonly suggestedBidAdjustment?: number;
}

export interface Inline1810 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1811 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1812 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType: string;
}

export interface Inline1813 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1815 {
  readonly campaignId: string;
  readonly extendedData?: Inline1815;
  readonly globalKeywordId?: string;
  readonly keywordId: string;
  readonly keywordText: string;
  readonly matchType: string;
  readonly state: string;
}

export interface Inline1817 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline1818 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1819 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline182 {
  readonly endDate?: string;
  readonly estimatedIncrementalClicksLower?: number;
  readonly estimatedIncrementalClicksUpper?: number;
  readonly startDate?: string;
}

export interface Inline1820 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1822 {
  readonly campaignId: string;
  readonly expression: ReadonlyArray<Inline1822>;
  readonly extendedData?: Inline1823;
  readonly globalTargetId?: string;
  readonly resolvedExpression: ReadonlyArray<Inline1824>;
  readonly state: string;
  readonly targetId: string;
}

export interface Inline1823 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline1823>;
}

export interface Inline1824 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline1826 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1827 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1828 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline1829 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline183 {
  readonly action?: string;
  readonly adGroupId?: string;
  readonly suggestedBid?: number;
  readonly targetId?: string;
  readonly targetingGroupExpression?: string;
}

export interface Inline1830 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1832 {
  readonly autoManageCampaign?: boolean;
  readonly budget: Inline1832;
  readonly campaignId: string;
  readonly dynamicBidding?: Inline1833;
  readonly endDate?: string;
  readonly extendedData?: Inline1835;
  readonly globalCampaignId?: string;
  readonly marketplaceBudgetAllocation?: string;
  readonly name: string;
  readonly offAmazonSettings?: Inline1836;
  readonly portfolioId?: string;
  readonly siteRestrictions?: ReadonlyArray<string>;
  readonly startDate: string;
  readonly state: string;
  readonly tags?: Inline1837;
  readonly targetingType: string;
}

export interface Inline1833 {
  readonly placementBidding?: ReadonlyArray<Inline1833>;
  readonly shopperCohortBidding?: ReadonlyArray<Inline1834>;
  readonly strategy: string;
}

export interface Inline1834 {
  readonly audienceSegments?: ReadonlyArray<Inline1834>;
  readonly percentage?: number;
  readonly shopperCohortType: string;
}

export interface Inline1835 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline1835>;
}

export interface Inline1836 {
  readonly offAmazonBudgetControlStrategy?: string;
}

export interface Inline1837 {

}

export interface Inline1839 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1840 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1841 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1842 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType: string;
}

export interface Inline1843 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1845 {
  readonly adGroupId: string;
  readonly bid?: number;
  readonly campaignId: string;
  readonly extendedData?: Inline1845;
  readonly globalKeywordId?: string;
  readonly keywordId: string;
  readonly keywordText: string;
  readonly matchType: string;
  readonly nativeLanguageKeyword?: string;
  readonly nativeLanguageLocale?: string;
  readonly state: string;
}

export interface Inline1847 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1848 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1849 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline185 {
  readonly campaignId: string;
  readonly forecastEstimates?: Inline185;
  readonly recommendationDetails: unknown | unknown | unknown | unknown | unknown | unknown;
  readonly recommendationType: string;
}

export interface Inline1850 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType: string;
}

export interface Inline1851 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1853 {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly extendedData?: Inline1853;
  readonly globalKeywordId?: string;
  readonly keywordId: string;
  readonly keywordText: string;
  readonly matchType: string;
  readonly nativeLanguageKeyword?: string;
  readonly nativeLanguageLocale?: string;
  readonly state: string;
}

export interface Inline1855 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1856 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline1857 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1858 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1859 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1861 {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly expression: ReadonlyArray<Inline1861>;
  readonly extendedData?: Inline1862;
  readonly globalTargetId?: string;
  readonly resolvedExpression: ReadonlyArray<Inline1863>;
  readonly state: string;
  readonly targetId: string;
}

export interface Inline1862 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline1862>;
}

export interface Inline1863 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline1865 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1866 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1867 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1868 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1870 {
  readonly adGroupId: string;
  readonly adId: string;
  readonly asin?: string;
  readonly campaignId: string;
  readonly customText?: string;
  readonly extendedData?: Inline1870;
  readonly globalAdId?: string;
  readonly globalStoreSetting?: Inline1871;
  readonly sku?: string;
  readonly state: string;
}

export interface Inline1871 {
  readonly catalogSourceCountryCode?: string;
}

export interface Inline1873 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1874 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline1875 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1876 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1877 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1878 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1880 {
  readonly adGroupId: string;
  readonly bid?: number;
  readonly campaignId: string;
  readonly expression: ReadonlyArray<Inline1880>;
  readonly expressionType: string;
  readonly extendedData?: Inline1881;
  readonly globalTargetId?: string;
  readonly resolvedExpression: ReadonlyArray<Inline1882>;
  readonly state: string;
  readonly targetId: string;
}

export interface Inline1881 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline1881>;
}

export interface Inline1882 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline1884 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1885 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1887 {
  readonly autoTargetingCampaignAdGroupId?: string;
  readonly autoTargetingCampaignAdIds?: ReadonlyArray<string>;
  readonly keywordCampaignAdGroupIds?: ReadonlyArray<string>;
  readonly productCampaignAdGroupIds?: ReadonlyArray<string>;
  readonly state?: string;
  readonly targetPromotionGroupId?: string;
  readonly targetPromotionGroupName?: string;
}

export interface Inline1889 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline189 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline189;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface Inline1890 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1891 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1893 {
  readonly adIds?: ReadonlyArray<string>;
  readonly destinationAdGroups?: ReadonlyArray<Inline1893>;
  readonly sourceAdGroupId?: string;
  readonly sourceCampaignId?: string;
  readonly state?: string;
  readonly targetPromotionGroupId?: string;
  readonly targetPromotionGroupName?: string;
}

export interface Inline1895 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1896 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1898 {
  readonly expressionType?: string;
  readonly manualTargetingAdGroupId?: string;
  readonly target?: string;
  readonly targetId?: string;
  readonly targetPromotionGroupId?: string;
}

export interface Inline190 {
  readonly dateRangeTypeRuleDuration?: Inline190;
  readonly eventTypeRuleDuration?: Inline191;
}

export interface Inline1900 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1901 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1903 {
  readonly keywordTargetDetailsV2: Inline1903;
}

export interface Inline1904 {
  readonly productTargetDetailsV2: Inline1904;
}

export interface Inline1906 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline1909 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline191 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline1916 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline192 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline1920 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline1920>;
}

export interface Inline1922 {
  readonly entityNotFoundError?: Inline1922;
  readonly internalServerError?: Inline1923;
  readonly invalidInputError?: Inline1924;
  readonly malformedValueError?: Inline1925;
  readonly missingValueError?: Inline1926;
  readonly otherError?: Inline1927;
  readonly rangeError?: Inline1928;
  readonly throttledError?: Inline1929;
}

export interface Inline1923 {
  readonly cause?: Inline1923;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1924 {
  readonly cause?: Inline1924;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1925 {
  readonly cause?: Inline1925;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1926 {
  readonly cause?: Inline1926;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1927 {
  readonly cause?: Inline1927;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1928 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1928;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1929 {
  readonly cause?: Inline1929;
  readonly message: string;
  readonly reason: string;
}

export interface Inline193 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline193>;
  readonly type?: string;
}

export interface Inline1931 {
  readonly cause?: Inline1931;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1932 {
  readonly cause?: Inline1932;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1933 {
  readonly cause?: Inline1933;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1934 {
  readonly cause?: Inline1934;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1935 {
  readonly cause?: Inline1935;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1936 {
  readonly cause?: Inline1936;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1937 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1937;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1938 {
  readonly cause?: Inline1938;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1940 {
  readonly errorType: string;
  readonly errorValue: Inline1940;
}

export interface Inline1941 {
  readonly cause?: Inline1941;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1942 {
  readonly cause?: Inline1942;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1943 {
  readonly cause?: Inline1943;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1944 {
  readonly cause?: Inline1944;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1945 {
  readonly cause?: Inline1945;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1946 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1946;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1947 {
  readonly cause?: Inline1947;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1949 {
  readonly helpUrl?: string;
  readonly message?: string;
  readonly name?: string;
}

export interface Inline195 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline195;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface Inline1951 {
  readonly errorType: string;
  readonly errorValue: Inline1951;
}

export interface Inline1952 {
  readonly cause?: Inline1952;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1953 {
  readonly cause?: Inline1953;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1954 {
  readonly cause?: Inline1954;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1955 {
  readonly cause?: Inline1955;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1956 {
  readonly cause?: Inline1956;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1957 {
  readonly cause?: Inline1957;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1958 {
  readonly cause?: Inline1958;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1959 {
  readonly cause?: Inline1959;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline196 {
  readonly dateRangeTypeRuleDuration?: Inline196;
  readonly eventTypeRuleDuration?: Inline197;
}

export interface Inline1960 {
  readonly cause?: Inline1960;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1961 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1961;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1962 {
  readonly cause?: Inline1962;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1963 {
  readonly cause?: Inline1963;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1965 {
  readonly billingError?: Inline1965;
  readonly duplicateValueError?: Inline1966;
  readonly entityNotFoundError?: Inline1967;
  readonly entityQuotaError?: Inline1968;
  readonly entityStateError?: Inline1969;
  readonly internalServerError?: Inline1970;
  readonly malformedValueError?: Inline1971;
  readonly missingValueError?: Inline1972;
  readonly otherError?: Inline1973;
  readonly parentEntityError?: Inline1974;
  readonly rangeError?: Inline1975;
  readonly targetingClauseSetupError?: Inline1976;
  readonly throttledError?: Inline1977;
}

export interface Inline1966 {
  readonly cause?: Inline1966;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1967 {
  readonly cause?: Inline1967;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1968 {
  readonly cause?: Inline1968;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1969 {
  readonly cause?: Inline1969;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline197 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline1970 {
  readonly cause?: Inline1970;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1971 {
  readonly cause?: Inline1971;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1972 {
  readonly cause?: Inline1972;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1973 {
  readonly cause?: Inline1973;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1974 {
  readonly cause?: Inline1974;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1975 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1975;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline1976 {
  readonly cause?: Inline1976;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1977 {
  readonly cause?: Inline1977;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1979 {
  readonly cause?: Inline1979;
  readonly message: string;
  readonly reason: string;
}

export interface Inline198 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline1980 {
  readonly cause?: Inline1980;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1981 {
  readonly cause?: Inline1981;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1982 {
  readonly cause?: Inline1982;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1983 {
  readonly cause?: Inline1983;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1984 {
  readonly cause?: Inline1984;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1985 {
  readonly cause?: Inline1985;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1986 {
  readonly cause?: Inline1986;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1987 {
  readonly cause?: Inline1987;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1988 {
  readonly cause?: Inline1988;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1989 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline1989;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline199 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline199>;
  readonly type?: string;
}

export interface Inline1990 {
  readonly cause?: Inline1990;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1991 {
  readonly cause?: Inline1991;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1993 {
  readonly errorType: string;
  readonly errorValue: Inline1993;
}

export interface Inline1994 {
  readonly cause?: Inline1994;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1995 {
  readonly cause?: Inline1995;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1996 {
  readonly cause?: Inline1996;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline1997 {
  readonly cause?: Inline1997;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1998 {
  readonly cause?: Inline1998;
  readonly message: string;
  readonly reason: string;
}

export interface Inline1999 {
  readonly cause?: Inline1999;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2000 {
  readonly cause?: Inline2000;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2001 {
  readonly cause?: Inline2001;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2002 {
  readonly cause?: Inline2002;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2003 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2003;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2004 {
  readonly cause?: Inline2004;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2005 {
  readonly cause?: Inline2005;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2007 {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly extendedData?: Inline2007;
  readonly globalKeywordId?: string;
  readonly keywordId: string;
  readonly keywordText: string;
  readonly matchType: string;
  readonly nativeLanguageKeyword?: string;
  readonly nativeLanguageLocale?: string;
  readonly state: string;
}

export interface Inline201 {
  readonly campaignIds?: ReadonlyArray<string>;
  readonly campaignOptimizationId: string;
  readonly createdDate?: string;
  readonly recurrence?: string;
  readonly ruleAction?: string;
  readonly ruleCondition?: ReadonlyArray<Inline201>;
  readonly ruleName?: string;
  readonly ruleStatus?: string;
  readonly ruleType?: string;
}

export interface Inline2010 {
  readonly entityNotFoundError?: Inline2010;
  readonly internalServerError?: Inline2011;
  readonly invalidInputError?: Inline2012;
  readonly malformedValueError?: Inline2013;
  readonly missingValueError?: Inline2014;
  readonly otherError?: Inline2015;
  readonly rangeError?: Inline2016;
  readonly throttledError?: Inline2017;
}

export interface Inline2011 {
  readonly cause?: Inline2011;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2012 {
  readonly cause?: Inline2012;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2013 {
  readonly cause?: Inline2013;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2014 {
  readonly cause?: Inline2014;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2015 {
  readonly cause?: Inline2015;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2016 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2016;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2017 {
  readonly cause?: Inline2017;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2019 {
  readonly cause?: Inline2019;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2020 {
  readonly cause?: Inline2020;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2021 {
  readonly cause?: Inline2021;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2022 {
  readonly cause?: Inline2022;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2023 {
  readonly cause?: Inline2023;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2024 {
  readonly cause?: Inline2024;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2025 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2025;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2026 {
  readonly cause?: Inline2026;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2028 {
  readonly errorType: string;
  readonly errorValue: Inline2028;
}

export interface Inline2029 {
  readonly cause?: Inline2029;
  readonly message: string;
  readonly reason: string;
}

export interface Inline203 {
  readonly id?: string;
  readonly name?: string;
}

export interface Inline2030 {
  readonly cause?: Inline2030;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2031 {
  readonly cause?: Inline2031;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2032 {
  readonly cause?: Inline2032;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2033 {
  readonly cause?: Inline2033;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2034 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2034;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2035 {
  readonly cause?: Inline2035;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2037 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline2038 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline2038>;
}

export interface Inline2039 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline204 {
  readonly id?: string;
  readonly name?: string;
}

export interface Inline2041 {
  readonly helpUrl?: string;
  readonly message?: string;
  readonly name?: string;
}

export interface Inline2043 {
  readonly errorType: string;
  readonly errorValue: Inline2043;
}

export interface Inline2044 {
  readonly cause?: Inline2044;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2045 {
  readonly cause?: Inline2045;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2046 {
  readonly cause?: Inline2046;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline2047 {
  readonly cause?: Inline2047;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2048 {
  readonly cause?: Inline2048;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2049 {
  readonly cause?: Inline2049;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline205 {
  readonly id?: string;
  readonly name?: string;
}

export interface Inline2050 {
  readonly cause?: Inline2050;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2051 {
  readonly cause?: Inline2051;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2052 {
  readonly cause?: Inline2052;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2053 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2053;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2054 {
  readonly cause?: Inline2054;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2055 {
  readonly cause?: Inline2055;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2057 {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly expression: ReadonlyArray<Inline2057>;
  readonly extendedData?: Inline2058;
  readonly globalTargetId?: string;
  readonly resolvedExpression: ReadonlyArray<Inline2059>;
  readonly state: string;
  readonly targetId: string;
}

export interface Inline2058 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline2058>;
}

export interface Inline2059 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline206 {
  readonly max?: number;
  readonly min?: number;
}

export interface Inline2063 {
  readonly billingError?: Inline2063;
  readonly duplicateValueError?: Inline2064;
  readonly entityNotFoundError?: Inline2065;
  readonly entityQuotaError?: Inline2066;
  readonly entityStateError?: Inline2067;
  readonly internalServerError?: Inline2068;
  readonly malformedValueError?: Inline2069;
  readonly missingValueError?: Inline2070;
  readonly otherError?: Inline2071;
  readonly parentEntityError?: Inline2072;
  readonly rangeError?: Inline2073;
  readonly targetingClauseSetupError?: Inline2074;
  readonly throttledError?: Inline2075;
}

export interface Inline2064 {
  readonly cause?: Inline2064;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2065 {
  readonly cause?: Inline2065;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2066 {
  readonly cause?: Inline2066;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline2067 {
  readonly cause?: Inline2067;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2068 {
  readonly cause?: Inline2068;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2069 {
  readonly cause?: Inline2069;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline207 {
  readonly max?: number;
  readonly min?: number;
}

export interface Inline2070 {
  readonly cause?: Inline2070;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2071 {
  readonly cause?: Inline2071;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2072 {
  readonly cause?: Inline2072;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2073 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2073;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2074 {
  readonly cause?: Inline2074;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2075 {
  readonly cause?: Inline2075;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2077 {
  readonly cause?: Inline2077;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2078 {
  readonly cause?: Inline2078;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2079 {
  readonly cause?: Inline2079;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2080 {
  readonly cause?: Inline2080;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline2081 {
  readonly cause?: Inline2081;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2082 {
  readonly cause?: Inline2082;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2083 {
  readonly cause?: Inline2083;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2084 {
  readonly cause?: Inline2084;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2085 {
  readonly cause?: Inline2085;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2086 {
  readonly cause?: Inline2086;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2087 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2087;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2088 {
  readonly cause?: Inline2088;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2089 {
  readonly cause?: Inline2089;
  readonly message: string;
  readonly reason: string;
}

export interface Inline209 {
  readonly countryKeywords?: Inline209;
  readonly matchType?: string;
}

export interface Inline2091 {
  readonly errorType: string;
  readonly errorValue: Inline2091;
}

export interface Inline2092 {
  readonly cause?: Inline2092;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2093 {
  readonly cause?: Inline2093;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2094 {
  readonly cause?: Inline2094;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline2095 {
  readonly cause?: Inline2095;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2096 {
  readonly cause?: Inline2096;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2097 {
  readonly cause?: Inline2097;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2098 {
  readonly cause?: Inline2098;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2099 {
  readonly cause?: Inline2099;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline21 {
  readonly bid?: number;
  readonly keyword?: string;
  readonly matchType?: string;
  readonly userSelectedKeyword?: boolean;
}

export interface Inline2100 {
  readonly cause?: Inline2100;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2101 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2101;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2102 {
  readonly cause?: Inline2102;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2103 {
  readonly cause?: Inline2103;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2106 {
  readonly adGroupName: string;
  readonly defaultBid: number;
  readonly targetingTypes: ReadonlyArray<string>;
}

export interface Inline2107 {
  readonly budget: number;
  readonly budgetType: string;
}

export interface Inline2108 {
  readonly placementBidding?: ReadonlyArray<Inline2108>;
  readonly strategy: string;
}

export interface Inline2109 {

}

export interface Inline211 {

}

export interface Inline2112 {
  readonly budget: number;
  readonly budgetType: string;
}

export interface Inline2113 {
  readonly placementBidding?: ReadonlyArray<Inline2113>;
  readonly strategy: string;
}

export interface Inline2114 {

}

export interface Inline2116 {
  readonly percentage: number;
  readonly placement: string;
}

export interface Inline212 {
  readonly countryKeywords?: Inline212;
  readonly matchType?: string;
}

export interface Inline2124 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline2127 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline2132 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline2132>;
}

export interface Inline2133 {
  readonly catalogSourceCountryCode?: string;
}

export interface Inline2135 {
  readonly entityNotFoundError?: Inline2135;
  readonly internalServerError?: Inline2136;
  readonly invalidInputError?: Inline2137;
  readonly malformedValueError?: Inline2138;
  readonly missingValueError?: Inline2139;
  readonly otherError?: Inline2140;
  readonly rangeError?: Inline2141;
  readonly throttledError?: Inline2142;
}

export interface Inline2136 {
  readonly cause?: Inline2136;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2137 {
  readonly cause?: Inline2137;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2138 {
  readonly cause?: Inline2138;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2139 {
  readonly cause?: Inline2139;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline214 {

}

export interface Inline2140 {
  readonly cause?: Inline2140;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2141 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2141;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2142 {
  readonly cause?: Inline2142;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2144 {
  readonly cause?: Inline2144;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2145 {
  readonly cause?: Inline2145;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2146 {
  readonly cause?: Inline2146;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2147 {
  readonly cause?: Inline2147;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2148 {
  readonly cause?: Inline2148;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2149 {
  readonly cause?: Inline2149;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2150 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2150;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2151 {
  readonly cause?: Inline2151;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2153 {
  readonly errorType: string;
  readonly errorValue: Inline2153;
}

export interface Inline2154 {
  readonly cause?: Inline2154;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2155 {
  readonly cause?: Inline2155;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2156 {
  readonly cause?: Inline2156;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2157 {
  readonly cause?: Inline2157;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2158 {
  readonly cause?: Inline2158;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2159 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2159;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline216 {
  readonly lower?: number;
  readonly upper?: number;
}

export interface Inline2160 {
  readonly cause?: Inline2160;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2162 {
  readonly helpUrl?: string;
  readonly message?: string;
  readonly name?: string;
}

export interface Inline2164 {
  readonly errorType: string;
  readonly errorValue: Inline2164;
}

export interface Inline2165 {
  readonly cause?: Inline2165;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2166 {
  readonly cause?: Inline2166;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2167 {
  readonly cause?: Inline2167;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2168 {
  readonly cause?: Inline2168;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2169 {
  readonly cause?: Inline2169;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline2170 {
  readonly cause?: Inline2170;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2171 {
  readonly cause?: Inline2171;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2172 {
  readonly cause?: Inline2172;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2173 {
  readonly cause?: Inline2173;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2174 {
  readonly cause?: Inline2174;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2175 {
  readonly cause?: Inline2175;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2176 {
  readonly cause?: Inline2176;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2177 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2177;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2178 {
  readonly cause?: Inline2178;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2179 {
  readonly cause?: Inline2179;
  readonly message: string;
  readonly reason: string;
}

export interface Inline218 {
  readonly values?: ReadonlyArray<Inline218>;
}

export interface Inline2181 {
  readonly adEligibilityError?: Inline2181;
  readonly asinOwnershipError?: Inline2182;
  readonly billingError?: Inline2183;
  readonly duplicateValueError?: Inline2184;
  readonly entityNotFoundError?: Inline2185;
  readonly entityQuotaError?: Inline2186;
  readonly entityStateError?: Inline2187;
  readonly internalServerError?: Inline2188;
  readonly malformedValueError?: Inline2189;
  readonly missingValueError?: Inline2190;
  readonly otherError?: Inline2191;
  readonly parentEntityError?: Inline2192;
  readonly productIdentifierError?: Inline2193;
  readonly rangeError?: Inline2194;
  readonly throttledError?: Inline2195;
  readonly unsupportedOperationError?: Inline2196;
}

export interface Inline2182 {
  readonly cause?: Inline2182;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2183 {
  readonly cause?: Inline2183;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2184 {
  readonly cause?: Inline2184;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2185 {
  readonly cause?: Inline2185;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2186 {
  readonly cause?: Inline2186;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline2187 {
  readonly cause?: Inline2187;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2188 {
  readonly cause?: Inline2188;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2189 {
  readonly cause?: Inline2189;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline219 {
  readonly values?: ReadonlyArray<Inline219>;
}

export interface Inline2190 {
  readonly cause?: Inline2190;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2191 {
  readonly cause?: Inline2191;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2192 {
  readonly cause?: Inline2192;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2193 {
  readonly cause?: Inline2193;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2194 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2194;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2195 {
  readonly cause?: Inline2195;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2196 {
  readonly cause?: Inline2196;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2198 {
  readonly cause?: Inline2198;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2199 {
  readonly cause?: Inline2199;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2200 {
  readonly cause?: Inline2200;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2201 {
  readonly cause?: Inline2201;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2202 {
  readonly cause?: Inline2202;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2203 {
  readonly cause?: Inline2203;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline2204 {
  readonly cause?: Inline2204;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2205 {
  readonly cause?: Inline2205;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2206 {
  readonly cause?: Inline2206;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2207 {
  readonly cause?: Inline2207;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2208 {
  readonly cause?: Inline2208;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2209 {
  readonly cause?: Inline2209;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2210 {
  readonly cause?: Inline2210;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2211 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2211;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2212 {
  readonly cause?: Inline2212;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2213 {
  readonly cause?: Inline2213;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2215 {
  readonly errorType: string;
  readonly errorValue: Inline2215;
}

export interface Inline2216 {
  readonly cause?: Inline2216;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2217 {
  readonly cause?: Inline2217;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2218 {
  readonly cause?: Inline2218;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2219 {
  readonly cause?: Inline2219;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline222 {
  readonly adGroupId?: string;
  readonly asins: ReadonlyArray<string>;
  readonly targetingExpressions: ReadonlyArray<Inline222>;
}

export interface Inline2220 {
  readonly cause?: Inline2220;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline2221 {
  readonly cause?: Inline2221;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2222 {
  readonly cause?: Inline2222;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2223 {
  readonly cause?: Inline2223;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2224 {
  readonly cause?: Inline2224;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2225 {
  readonly cause?: Inline2225;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2226 {
  readonly cause?: Inline2226;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2227 {
  readonly cause?: Inline2227;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2228 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2228;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2229 {
  readonly cause?: Inline2229;
  readonly message: string;
  readonly reason: string;
}

export interface Inline223 {
  readonly adjustments?: ReadonlyArray<Inline223>;
  readonly strategy: string;
}

export interface Inline2230 {
  readonly cause?: Inline2230;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2232 {
  readonly adGroupId: string;
  readonly adId: string;
  readonly asin?: string;
  readonly campaignId: string;
  readonly customText?: string;
  readonly extendedData?: Inline2232;
  readonly globalAdId?: string;
  readonly globalStoreSetting?: Inline2233;
  readonly sku?: string;
  readonly state: string;
}

export interface Inline2233 {
  readonly catalogSourceCountryCode?: string;
}

export interface Inline2235 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline2242 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline2245 {
  readonly data?: string;
  readonly reason?: string;
}

export interface Inline225 {
  readonly benchmarkStatus?: string;
  readonly values?: Inline225;
}

export interface Inline2254 {
  readonly audienceId: string;
  readonly audienceSegmentType?: string;
}

export interface Inline226 {
  readonly lower?: number;
  readonly upper?: number;
}

export interface Inline2260 {
  readonly entityNotFoundError?: Inline2260;
  readonly internalServerError?: Inline2261;
  readonly invalidInputError?: Inline2262;
  readonly malformedValueError?: Inline2263;
  readonly missingValueError?: Inline2264;
  readonly otherError?: Inline2265;
  readonly rangeError?: Inline2266;
  readonly throttledError?: Inline2267;
}

export interface Inline2261 {
  readonly cause?: Inline2261;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2262 {
  readonly cause?: Inline2262;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2263 {
  readonly cause?: Inline2263;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2264 {
  readonly cause?: Inline2264;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2265 {
  readonly cause?: Inline2265;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2266 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2266;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2267 {
  readonly cause?: Inline2267;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2269 {
  readonly cause?: Inline2269;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline227 {
  readonly lower?: number;
  readonly upper?: number;
}

export interface Inline2270 {
  readonly cause?: Inline2270;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2271 {
  readonly cause?: Inline2271;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2272 {
  readonly cause?: Inline2272;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2273 {
  readonly cause?: Inline2273;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2274 {
  readonly cause?: Inline2274;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2275 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2275;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2276 {
  readonly cause?: Inline2276;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2278 {
  readonly errorType: string;
  readonly errorValue: Inline2278;
}

export interface Inline2279 {
  readonly cause?: Inline2279;
  readonly message: string;
  readonly reason: string;
}

export interface Inline228 {
  readonly benchmark?: Inline228;
  readonly budgetModifier?: number;
  readonly dailyBudget?: number;
  readonly endDate?: string;
  readonly eventKey?: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline2280 {
  readonly cause?: Inline2280;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2281 {
  readonly cause?: Inline2281;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2282 {
  readonly cause?: Inline2282;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2283 {
  readonly cause?: Inline2283;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2284 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2284;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2285 {
  readonly cause?: Inline2285;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2287 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline2288 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline2288>;
}

export interface Inline2289 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline229 {
  readonly lower?: number;
  readonly upper?: number;
}

export interface Inline2291 {
  readonly helpUrl?: string;
  readonly message?: string;
  readonly name?: string;
}

export interface Inline2293 {
  readonly errorType: string;
  readonly errorValue: Inline2293;
}

export interface Inline2294 {
  readonly cause?: Inline2294;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2295 {
  readonly cause?: Inline2295;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2296 {
  readonly cause?: Inline2296;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2297 {
  readonly cause?: Inline2297;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline2298 {
  readonly cause?: Inline2298;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2299 {
  readonly cause?: Inline2299;
  readonly message: string;
  readonly reason: string;
}

export interface Inline23 {
  readonly adjustments?: ReadonlyArray<Inline23>;
  readonly strategy: string;
}

export interface Inline230 {
  readonly lower?: number;
  readonly upper?: number;
}

export interface Inline2300 {
  readonly cause?: Inline2300;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2301 {
  readonly cause?: Inline2301;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2302 {
  readonly cause?: Inline2302;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2303 {
  readonly cause?: Inline2303;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2304 {
  readonly cause?: Inline2304;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2305 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2305;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2306 {
  readonly cause?: Inline2306;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2307 {
  readonly cause?: Inline2307;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2309 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline2312 {
  readonly adGroupId: string;
  readonly bid?: number;
  readonly campaignId: string;
  readonly expression: ReadonlyArray<Inline2312>;
  readonly expressionType: string;
  readonly extendedData?: Inline2313;
  readonly globalTargetId?: string;
  readonly resolvedExpression: ReadonlyArray<Inline2314>;
  readonly state: string;
  readonly targetId: string;
}

export interface Inline2313 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline2313>;
}

export interface Inline2314 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline2322 {
  readonly biddingError?: Inline2322;
  readonly billingError?: Inline2323;
  readonly duplicateValueError?: Inline2324;
  readonly entityNotFoundError?: Inline2325;
  readonly entityQuotaError?: Inline2326;
  readonly entityStateError?: Inline2327;
  readonly expressionTypeError?: Inline2328;
  readonly internalServerError?: Inline2329;
  readonly malformedValueError?: Inline2330;
  readonly missingValueError?: Inline2331;
  readonly otherError?: Inline2332;
  readonly parentEntityError?: Inline2333;
  readonly rangeError?: Inline2334;
  readonly targetingClauseSetupError?: Inline2335;
  readonly throttledError?: Inline2336;
}

export interface Inline2323 {
  readonly cause?: Inline2323;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2324 {
  readonly cause?: Inline2324;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2325 {
  readonly cause?: Inline2325;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2326 {
  readonly cause?: Inline2326;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline2327 {
  readonly cause?: Inline2327;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2328 {
  readonly cause?: Inline2328;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2329 {
  readonly cause?: Inline2329;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2330 {
  readonly cause?: Inline2330;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2331 {
  readonly cause?: Inline2331;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2332 {
  readonly cause?: Inline2332;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2333 {
  readonly cause?: Inline2333;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2334 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2334;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2335 {
  readonly cause?: Inline2335;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2336 {
  readonly cause?: Inline2336;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2338 {
  readonly cause?: Inline2338;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2339 {
  readonly cause?: Inline2339;
  readonly message: string;
  readonly reason: string;
}

export interface Inline234 {
  readonly bidRecId?: string;
  readonly rangeEnd?: number;
  readonly rangeStart?: number;
  readonly suggested?: number;
}

export interface Inline2340 {
  readonly cause?: Inline2340;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2341 {
  readonly cause?: Inline2341;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2342 {
  readonly cause?: Inline2342;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline2343 {
  readonly cause?: Inline2343;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2344 {
  readonly cause?: Inline2344;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2345 {
  readonly cause?: Inline2345;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2346 {
  readonly cause?: Inline2346;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2347 {
  readonly cause?: Inline2347;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2348 {
  readonly cause?: Inline2348;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2349 {
  readonly cause?: Inline2349;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2350 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2350;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2351 {
  readonly cause?: Inline2351;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2352 {
  readonly cause?: Inline2352;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2354 {
  readonly errorType: string;
  readonly errorValue: Inline2354;
}

export interface Inline2355 {
  readonly cause?: Inline2355;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2356 {
  readonly cause?: Inline2356;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2357 {
  readonly cause?: Inline2357;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2358 {
  readonly cause?: Inline2358;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline2359 {
  readonly cause?: Inline2359;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2360 {
  readonly cause?: Inline2360;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2361 {
  readonly cause?: Inline2361;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2362 {
  readonly cause?: Inline2362;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2363 {
  readonly cause?: Inline2363;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2364 {
  readonly cause?: Inline2364;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2365 {
  readonly cause?: Inline2365;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2366 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2366;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2367 {
  readonly cause?: Inline2367;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2368 {
  readonly cause?: Inline2368;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2371 {
  readonly keywordTargetDetailsV2: Inline2371;
}

export interface Inline2372 {
  readonly productTargetDetailsV2: Inline2372;
}

export interface Inline2374 {
  readonly adGroupId?: string;
}

export interface Inline2377 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline238 {
  readonly description?: string;
  readonly id: string;
  readonly impactSummary?: string;
  readonly sampleKeywords?: ReadonlyArray<string>;
  readonly text: string;
}

export interface Inline2389 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline2393 {
  readonly budget: number;
  readonly budgetType: string;
}

export interface Inline2394 {
  readonly placementBidding?: ReadonlyArray<Inline2394>;
  readonly shopperCohortBidding?: ReadonlyArray<Inline2395>;
  readonly strategy?: string;
}

export interface Inline2395 {
  readonly audienceSegments?: ReadonlyArray<Inline2395>;
  readonly percentage?: number;
  readonly shopperCohortType: string;
}

export interface Inline2396 {
  readonly offAmazonBudgetControlStrategy?: string;
}

export interface Inline2397 {

}

export interface Inline24 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline2400 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline2404 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline2407 {
  readonly adGroupId: string;
  readonly defaultBid?: number;
  readonly name?: string;
  readonly state?: string;
}

export interface Inline2409 {
  readonly error?: ReadonlyArray<Inline2409>;
  readonly success?: ReadonlyArray<Inline2423>;
}

export interface Inline2410 {
  readonly cause?: Inline2410;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2411 {
  readonly cause?: Inline2411;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2412 {
  readonly cause?: Inline2412;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2413 {
  readonly cause?: Inline2413;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2414 {
  readonly cause?: Inline2414;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline2415 {
  readonly cause?: Inline2415;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2416 {
  readonly cause?: Inline2416;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2417 {
  readonly cause?: Inline2417;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2418 {
  readonly cause?: Inline2418;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2419 {
  readonly cause?: Inline2419;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline242 {
  readonly bid?: number;
  readonly keyword?: string;
  readonly matchType?: string;
  readonly userSelectedKeyword?: boolean;
}

export interface Inline2420 {
  readonly cause?: Inline2420;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2421 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2421;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2422 {
  readonly cause?: Inline2422;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2423 {
  readonly adGroup?: Inline2423;
  readonly adGroupId?: string;
  readonly index: number;
}

export interface Inline2425 {
  readonly keywordId: string;
  readonly state?: string;
}

export interface Inline2427 {
  readonly error?: ReadonlyArray<Inline2427>;
  readonly success?: ReadonlyArray<Inline2439>;
}

export interface Inline2428 {
  readonly cause?: Inline2428;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2429 {
  readonly cause?: Inline2429;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2430 {
  readonly cause?: Inline2430;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline2431 {
  readonly cause?: Inline2431;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2432 {
  readonly cause?: Inline2432;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2433 {
  readonly cause?: Inline2433;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2434 {
  readonly cause?: Inline2434;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2435 {
  readonly cause?: Inline2435;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2436 {
  readonly cause?: Inline2436;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2437 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2437;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2438 {
  readonly cause?: Inline2438;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2439 {
  readonly campaignNegativeKeyword?: Inline2439;
  readonly campaignNegativeKeywordId?: string;
  readonly index: number;
}

export interface Inline244 {
  readonly bidRecId?: string;
  readonly rangeEnd?: number;
  readonly rangeStart?: number;
  readonly suggested?: number;
}

export interface Inline2441 {
  readonly expression?: ReadonlyArray<Inline2441>;
  readonly state?: string;
  readonly targetId: string;
}

export interface Inline2443 {
  readonly error?: ReadonlyArray<Inline2443>;
  readonly success?: ReadonlyArray<Inline2456>;
}

export interface Inline2444 {
  readonly cause?: Inline2444;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2445 {
  readonly cause?: Inline2445;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2446 {
  readonly cause?: Inline2446;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline2447 {
  readonly cause?: Inline2447;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2448 {
  readonly cause?: Inline2448;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2449 {
  readonly cause?: Inline2449;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2450 {
  readonly cause?: Inline2450;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2451 {
  readonly cause?: Inline2451;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2452 {
  readonly cause?: Inline2452;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2453 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2453;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2454 {
  readonly cause?: Inline2454;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2455 {
  readonly cause?: Inline2455;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2456 {
  readonly campaignNegativeTargetingClauseId?: string;
  readonly campaignNegativeTargetingClauses?: Inline2456;
  readonly index: number;
}

export interface Inline2457 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline2457>;
}

export interface Inline2458 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline246 {
  readonly countryValues?: unknown;
  readonly type: string;
}

export interface Inline2460 {
  readonly budget?: Inline2460;
  readonly campaignId: string;
  readonly dynamicBidding?: Inline2461;
  readonly endDate?: string;
  readonly name?: string;
  readonly offAmazonSettings?: Inline2463;
  readonly portfolioId?: string;
  readonly siteRestrictions?: ReadonlyArray<string>;
  readonly startDate?: string;
  readonly state?: string;
  readonly tags?: Inline2464;
  readonly targetingType?: string;
}

export interface Inline2461 {
  readonly placementBidding?: ReadonlyArray<Inline2461>;
  readonly shopperCohortBidding?: ReadonlyArray<Inline2462>;
  readonly strategy?: string;
}

export interface Inline2462 {
  readonly audienceSegments?: ReadonlyArray<Inline2462>;
  readonly percentage?: number;
  readonly shopperCohortType: string;
}

export interface Inline2463 {
  readonly offAmazonBudgetControlStrategy?: string;
}

export interface Inline2464 {

}

export interface Inline2466 {
  readonly error?: ReadonlyArray<Inline2466>;
  readonly success?: ReadonlyArray<Inline2482>;
}

export interface Inline2467 {
  readonly cause?: Inline2467;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2468 {
  readonly cause?: Inline2468;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2469 {
  readonly cause?: Inline2469;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2470 {
  readonly cause?: Inline2470;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2471 {
  readonly cause?: Inline2471;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2472 {
  readonly cause?: Inline2472;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2473 {
  readonly cause?: Inline2473;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline2474 {
  readonly cause?: Inline2474;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2475 {
  readonly cause?: Inline2475;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2476 {
  readonly cause?: Inline2476;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2477 {
  readonly cause?: Inline2477;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2478 {
  readonly cause?: Inline2478;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2479 {
  readonly cause?: Inline2479;
  readonly message: string;
  readonly reason: string;
}

export interface Inline248 {
  readonly adjustments?: ReadonlyArray<Inline248>;
  readonly strategy: string;
}

export interface Inline2480 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2480;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2481 {
  readonly cause?: Inline2481;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2482 {
  readonly campaign?: Inline2482;
  readonly campaignId?: string;
  readonly index: number;
}

export interface Inline2483 {
  readonly placementBidding?: ReadonlyArray<Inline2483>;
  readonly shopperCohortBidding?: ReadonlyArray<Inline2484>;
  readonly strategy: string;
}

export interface Inline2484 {
  readonly audienceSegments?: ReadonlyArray<Inline2484>;
  readonly percentage?: number;
  readonly shopperCohortType: string;
}

export interface Inline2485 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline2485>;
}

export interface Inline2486 {
  readonly offAmazonBudgetControlStrategy?: string;
}

export interface Inline2487 {

}

export interface Inline2489 {
  readonly bid?: number;
  readonly keywordId: string;
  readonly state?: string;
}

export interface Inline249 {

}

export interface Inline2491 {
  readonly error?: ReadonlyArray<Inline2491>;
  readonly success?: ReadonlyArray<Inline2506>;
}

export interface Inline2492 {
  readonly cause?: Inline2492;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2493 {
  readonly cause?: Inline2493;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2494 {
  readonly cause?: Inline2494;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2495 {
  readonly cause?: Inline2495;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline2496 {
  readonly cause?: Inline2496;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2497 {
  readonly cause?: Inline2497;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2498 {
  readonly cause?: Inline2498;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2499 {
  readonly cause?: Inline2499;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline250 {
  readonly countryValues?: unknown;
  readonly type: string;
}

export interface Inline2500 {
  readonly cause?: Inline2500;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2501 {
  readonly cause?: Inline2501;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2502 {
  readonly cause?: Inline2502;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2503 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2503;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2504 {
  readonly cause?: Inline2504;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2505 {
  readonly cause?: Inline2505;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2506 {
  readonly index: number;
  readonly keyword?: Inline2506;
  readonly keywordId?: string;
}

export interface Inline2508 {
  readonly keywordId: string;
  readonly state?: string;
}

export interface Inline2510 {
  readonly error?: ReadonlyArray<Inline2510>;
  readonly success?: ReadonlyArray<Inline2523>;
}

export interface Inline2511 {
  readonly cause?: Inline2511;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2512 {
  readonly cause?: Inline2512;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2513 {
  readonly cause?: Inline2513;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline2514 {
  readonly cause?: Inline2514;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2515 {
  readonly cause?: Inline2515;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2516 {
  readonly cause?: Inline2516;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2517 {
  readonly cause?: Inline2517;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2518 {
  readonly cause?: Inline2518;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2519 {
  readonly cause?: Inline2519;
  readonly message: string;
  readonly reason: string;
}

export interface Inline252 {
  readonly countryValues?: unknown;
  readonly type: string;
}

export interface Inline2520 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2520;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2521 {
  readonly cause?: Inline2521;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2522 {
  readonly cause?: Inline2522;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2523 {
  readonly index: number;
  readonly negativeKeyword?: Inline2523;
  readonly negativeKeywordId?: string;
}

export interface Inline2525 {
  readonly expression?: ReadonlyArray<Inline2525>;
  readonly state?: string;
  readonly targetId: string;
}

export interface Inline2527 {
  readonly error?: ReadonlyArray<Inline2527>;
  readonly success?: ReadonlyArray<Inline2540>;
}

export interface Inline2528 {
  readonly cause?: Inline2528;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2529 {
  readonly cause?: Inline2529;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2530 {
  readonly cause?: Inline2530;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline2531 {
  readonly cause?: Inline2531;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2532 {
  readonly cause?: Inline2532;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2533 {
  readonly cause?: Inline2533;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2534 {
  readonly cause?: Inline2534;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2535 {
  readonly cause?: Inline2535;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2536 {
  readonly cause?: Inline2536;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2537 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2537;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2538 {
  readonly cause?: Inline2538;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2539 {
  readonly cause?: Inline2539;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2540 {
  readonly index: number;
  readonly negativeTargetingClause?: Inline2540;
  readonly targetId?: string;
}

export interface Inline2541 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline2541>;
}

export interface Inline2542 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline2544 {
  readonly adId: string;
  readonly state?: string;
}

export interface Inline2546 {
  readonly error?: ReadonlyArray<Inline2546>;
  readonly success?: ReadonlyArray<Inline2562>;
}

export interface Inline2547 {
  readonly cause?: Inline2547;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2548 {
  readonly cause?: Inline2548;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2549 {
  readonly cause?: Inline2549;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline255 {
  readonly countryValues?: unknown;
  readonly type: string;
}

export interface Inline2550 {
  readonly cause?: Inline2550;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2551 {
  readonly cause?: Inline2551;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline2552 {
  readonly cause?: Inline2552;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2553 {
  readonly cause?: Inline2553;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2554 {
  readonly cause?: Inline2554;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2555 {
  readonly cause?: Inline2555;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2556 {
  readonly cause?: Inline2556;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2557 {
  readonly cause?: Inline2557;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2558 {
  readonly cause?: Inline2558;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2559 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2559;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2560 {
  readonly cause?: Inline2560;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2561 {
  readonly cause?: Inline2561;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2562 {
  readonly adId?: string;
  readonly index: number;
  readonly productAd?: Inline2562;
}

export interface Inline2563 {
  readonly catalogSourceCountryCode?: string;
}

export interface Inline2565 {
  readonly bid?: number;
  readonly expression?: ReadonlyArray<Inline2565>;
  readonly expressionType?: string;
  readonly state?: string;
  readonly targetId: string;
}

export interface Inline2567 {
  readonly error?: ReadonlyArray<Inline2567>;
  readonly success?: ReadonlyArray<Inline2582>;
}

export interface Inline2568 {
  readonly cause?: Inline2568;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2569 {
  readonly cause?: Inline2569;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2570 {
  readonly cause?: Inline2570;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2571 {
  readonly cause?: Inline2571;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline2572 {
  readonly cause?: Inline2572;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2573 {
  readonly cause?: Inline2573;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2574 {
  readonly cause?: Inline2574;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2575 {
  readonly cause?: Inline2575;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2576 {
  readonly cause?: Inline2576;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2577 {
  readonly cause?: Inline2577;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2578 {
  readonly cause?: Inline2578;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2579 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2579;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline2580 {
  readonly cause?: Inline2580;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2581 {
  readonly cause?: Inline2581;
  readonly message: string;
  readonly reason: string;
}

export interface Inline2582 {
  readonly index: number;
  readonly targetId?: string;
  readonly targetingClause?: Inline2582;
}

export interface Inline2583 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline2583>;
}

export interface Inline2584 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline2586 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline259 {
  readonly countryValues?: unknown;
  readonly type: string;
}

export interface Inline2595 {
  readonly max?: number;
  readonly min?: number;
}

export interface Inline26 {
  readonly adjustments?: ReadonlyArray<Inline26>;
  readonly strategy: string;
}

export interface Inline2600 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline2602 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline2607 {
  readonly bidValues: ReadonlyArray<Inline2607>;
  readonly targetingExpression: Inline2608;
}

export interface Inline2608 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline2609 {
  readonly clicks?: Inline2609;
  readonly orders?: Inline2610;
}

export interface Inline2610 {
  readonly values?: ReadonlyArray<Inline2610>;
}

export interface Inline2612 {
  readonly bidRecommendationsForTargetingExpressions: ReadonlyArray<Inline2612>;
  readonly impactMetrics?: Inline2614;
  readonly theme: string;
}

export interface Inline2613 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline2614 {
  readonly clicks?: Inline2614;
  readonly orders?: Inline2615;
}

export interface Inline2615 {
  readonly values?: ReadonlyArray<Inline2615>;
}

export interface Inline2617 {
  readonly bidRecommendationsForTargetingExpressions: ReadonlyArray<Inline2617>;
  readonly theme: string;
}

export interface Inline2618 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline262 {
  readonly countryBidAnalyses?: unknown;
  readonly expression: Inline262;
}

export interface Inline2620 {
  readonly bidAnalysesForTargetingExpressions?: ReadonlyArray<Inline2620>;
  readonly bidRecommendationsForTargetingExpressions: ReadonlyArray<Inline2625>;
  readonly theme: string;
}

export interface Inline2621 {
  readonly bid: number;
  readonly impactMetrics: Inline2621;
  readonly type: string;
}

export interface Inline2622 {
  readonly bid: number;
  readonly impactMetrics: Inline2622;
  readonly type: string;
}

export interface Inline2623 {
  readonly bid: number;
  readonly impactMetrics: Inline2623;
  readonly type: string;
}

export interface Inline2624 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline2625 {
  readonly bidValues: ReadonlyArray<Inline2625>;
  readonly suggestedBidImpactMetrics?: Inline2626;
  readonly targetingExpression: Inline2627;
}

export interface Inline2626 {
  readonly estimatedImpressionLower?: number;
  readonly estimatedImpressionUpper?: number;
}

export interface Inline2627 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline2629 {
  readonly bidValues: ReadonlyArray<Inline2629>;
  readonly targetingExpression: Inline2630;
}

export interface Inline263 {
  readonly countrySuggestedBids: unknown;
  readonly expression: Inline263;
}

export interface Inline2630 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline2632 {
  readonly bidAnalyses: Inline2632;
  readonly targetingExpression: Inline2636;
}

export interface Inline2633 {
  readonly bid: number;
  readonly impactMetrics: Inline2633;
  readonly type: string;
}

export interface Inline2634 {
  readonly bid: number;
  readonly impactMetrics: Inline2634;
  readonly type: string;
}

export interface Inline2635 {
  readonly bid: number;
  readonly impactMetrics: Inline2635;
  readonly type: string;
}

export interface Inline2636 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline2637 {
  readonly bidValues: ReadonlyArray<Inline2637>;
  readonly suggestedBidImpactMetrics?: Inline2638;
  readonly targetingExpression: Inline2639;
}

export interface Inline2638 {
  readonly estimatedImpressionLower?: number;
  readonly estimatedImpressionUpper?: number;
}

export interface Inline2639 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline2641 {
  readonly rangeEnd?: number;
  readonly rangeStart?: number;
  readonly suggested?: number;
}

export interface Inline2648 {
  readonly associatedCampaignIds?: ReadonlyArray<string>;
  readonly code?: string;
  readonly details?: string;
  readonly ruleId?: string;
}

export interface Inline265 {
  readonly code?: string;
  readonly countryCodes?: ReadonlyArray<string>;
  readonly message?: string;
}

export interface Inline2650 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline2650;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface Inline2651 {
  readonly dateRangeTypeRuleDuration?: Inline2651;
  readonly eventTypeRuleDuration?: Inline2652;
}

export interface Inline2652 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline2653 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline2654 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline2654>;
  readonly type?: string;
}

export interface Inline2657 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline2660 {
  readonly lower?: number;
  readonly upper?: number;
}

export interface Inline2661 {
  readonly lower?: number;
  readonly upper?: number;
}

export interface Inline2662 {
  readonly lower?: number;
  readonly upper?: number;
}

export interface Inline2664 {
  readonly campaignId: string;
  readonly defaultBid: number;
  readonly name: string;
  readonly state: string;
}

export interface Inline2667 {
  readonly campaignId: string;
  readonly defaultBid: number;
  readonly name: string;
  readonly state: string;
}

export interface Inline2668 {
  readonly adGroupId: string;
  readonly defaultBid?: number;
  readonly name?: string;
  readonly state?: string;
}

export interface Inline267 {
  readonly bidAnalysesForTargetingExpressions?: ReadonlyArray<Inline267>;
  readonly bidRecommendationsForTargetingExpressions: ReadonlyArray<Inline268>;
  readonly theme: string;
}

export interface Inline2671 {
  readonly adGroupId: string;
  readonly defaultBid?: number;
  readonly name?: string;
  readonly state?: string;
}

export interface Inline2672 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2675 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2676 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2677 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2678 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline2679 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline268 {
  readonly countrySuggestedBids: unknown;
  readonly expression: Inline268;
}

export interface Inline2681 {
  readonly adGroups?: ReadonlyArray<Inline2681>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}

export interface Inline2683 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2684 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2685 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline2686 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2688 {
  readonly budgetIncreaseBy?: Inline2688;
  readonly duration?: Inline2689;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline2691;
  readonly recurrence?: Inline2692;
  readonly ruleType?: string;
}

export interface Inline2689 {
  readonly dateRangeTypeRuleDuration?: Inline2689;
  readonly eventTypeRuleDuration?: Inline2690;
}

export interface Inline269 {
  readonly code?: string;
  readonly countryCodes?: ReadonlyArray<string>;
  readonly message?: string;
}

export interface Inline2690 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline2691 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline2692 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline2692>;
  readonly type?: string;
}

export interface Inline2695 {
  readonly budgetIncreaseBy?: Inline2695;
  readonly duration?: Inline2696;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline2698;
  readonly recurrence?: Inline2699;
  readonly ruleType?: string;
}

export interface Inline2696 {
  readonly dateRangeTypeRuleDuration?: Inline2696;
  readonly eventTypeRuleDuration?: Inline2697;
}

export interface Inline2697 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline2698 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline2699 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline2699>;
  readonly type?: string;
}

export interface Inline27 {
  readonly asin?: string;
  readonly globalStoreSetting?: Inline27;
}

export interface Inline2700 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline2700;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface Inline2701 {
  readonly dateRangeTypeRuleDuration?: Inline2701;
  readonly eventTypeRuleDuration?: Inline2702;
}

export interface Inline2702 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline2703 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline2704 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline2704>;
  readonly type?: string;
}

export interface Inline2707 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline2707;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface Inline2708 {
  readonly dateRangeTypeRuleDuration?: Inline2708;
  readonly eventTypeRuleDuration?: Inline2709;
}

export interface Inline2709 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline2710 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline2711 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline2711>;
  readonly type?: string;
}

export interface Inline2713 {
  readonly budgetRule?: Inline2713;
}

export interface Inline2714 {
  readonly dateRangeTypeRuleDuration?: Inline2714;
  readonly eventTypeRuleDuration?: Inline2715;
}

export interface Inline2715 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline2716 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline2717 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline2717>;
  readonly type?: string;
}

export interface Inline2720 {
  readonly associatedCampaigns?: ReadonlyArray<Inline2720>;
  readonly nextToken?: string;
}

export interface Inline2722 {
  readonly budgetRuleId: string;
  readonly campaignId: string;
}

export interface Inline2725 {
  readonly budgetRuleId: string;
  readonly campaignId: string;
}

export interface Inline2726 {
  readonly budgetRuleId: string;
  readonly campaignId: string;
}

export interface Inline2729 {
  readonly budgetRuleId: string;
  readonly campaignId: string;
}

export interface Inline2731 {
  readonly campaignId: string;
  readonly recommendationType: string;
}

export interface Inline2733 {
  readonly nextToken?: string;
  readonly recommendations: ReadonlyArray<Inline2733>;
}

export interface Inline2735 {
  readonly campaignId: string;
  readonly recommendationType: string;
}

export interface Inline2736 {
  readonly campaignId: string;
  readonly keywordText: string;
  readonly matchType: string;
  readonly state: string;
}

export interface Inline2739 {
  readonly campaignId: string;
  readonly keywordText: string;
  readonly matchType: string;
  readonly state: string;
}

export interface Inline274 {
  readonly code?: string;
  readonly details?: string;
  readonly optimizationRuleId?: string;
}

export interface Inline2740 {
  readonly keywordId: string;
  readonly state?: string;
}

export interface Inline2743 {
  readonly keywordId: string;
  readonly state?: string;
}

export interface Inline2744 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2747 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2748 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2749 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2750 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType: string;
}

export interface Inline2751 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2753 {
  readonly campaignNegativeKeywords?: ReadonlyArray<Inline2753>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}

export interface Inline2755 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2756 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2757 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType: string;
}

export interface Inline2758 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2759 {
  readonly campaignId: string;
  readonly expression: ReadonlyArray<Inline2759>;
  readonly state: string;
}

export interface Inline276 {
  readonly filterType?: string;
  readonly values?: ReadonlyArray<string>;
}

export interface Inline2762 {
  readonly campaignId: string;
  readonly expression: ReadonlyArray<Inline2762>;
  readonly state: string;
}

export interface Inline2763 {
  readonly expression?: ReadonlyArray<Inline2763>;
  readonly state?: string;
  readonly targetId: string;
}

export interface Inline2766 {
  readonly expression?: ReadonlyArray<Inline2766>;
  readonly state?: string;
  readonly targetId: string;
}

export interface Inline2767 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2770 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2771 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline2772 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2773 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2774 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2776 {
  readonly campaignNegativeTargetingClauses?: ReadonlyArray<Inline2776>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}

export interface Inline2777 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline2777>;
}

export interface Inline2778 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline2780 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline2781 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2782 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2783 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2784 {
  readonly autoManageCampaign?: boolean;
  readonly budget: Inline2784;
  readonly dynamicBidding?: Inline2785;
  readonly endDate?: string;
  readonly name: string;
  readonly offAmazonSettings?: Inline2787;
  readonly portfolioId?: string;
  readonly siteRestrictions?: ReadonlyArray<string>;
  readonly startDate?: string;
  readonly state: string;
  readonly tags?: Inline2788;
  readonly targetingType: string;
}

export interface Inline2785 {
  readonly placementBidding?: ReadonlyArray<Inline2785>;
  readonly shopperCohortBidding?: ReadonlyArray<Inline2786>;
  readonly strategy?: string;
}

export interface Inline2786 {
  readonly audienceSegments?: ReadonlyArray<Inline2786>;
  readonly percentage?: number;
  readonly shopperCohortType: string;
}

export interface Inline2787 {
  readonly offAmazonBudgetControlStrategy?: string;
}

export interface Inline2788 {

}

export interface Inline279 {
  readonly action: Inline279;
  readonly conditions?: ReadonlyArray<Inline280>;
  readonly recurrence: Inline282;
  readonly ruleCategory: string;
  readonly ruleName?: string;
  readonly ruleSubCategory: string;
  readonly status?: string;
}

export interface Inline2791 {
  readonly autoManageCampaign?: boolean;
  readonly budget: Inline2791;
  readonly dynamicBidding?: Inline2792;
  readonly endDate?: string;
  readonly name: string;
  readonly offAmazonSettings?: Inline2794;
  readonly portfolioId?: string;
  readonly siteRestrictions?: ReadonlyArray<string>;
  readonly startDate?: string;
  readonly state: string;
  readonly tags?: Inline2795;
  readonly targetingType: string;
}

export interface Inline2792 {
  readonly placementBidding?: ReadonlyArray<Inline2792>;
  readonly shopperCohortBidding?: ReadonlyArray<Inline2793>;
  readonly strategy?: string;
}

export interface Inline2793 {
  readonly audienceSegments?: ReadonlyArray<Inline2793>;
  readonly percentage?: number;
  readonly shopperCohortType: string;
}

export interface Inline2794 {
  readonly offAmazonBudgetControlStrategy?: string;
}

export interface Inline2795 {

}

export interface Inline2796 {
  readonly budget?: Inline2796;
  readonly campaignId: string;
  readonly dynamicBidding?: Inline2797;
  readonly endDate?: string;
  readonly name?: string;
  readonly offAmazonSettings?: Inline2799;
  readonly portfolioId?: string;
  readonly siteRestrictions?: ReadonlyArray<string>;
  readonly startDate?: string;
  readonly state?: string;
  readonly tags?: Inline2800;
  readonly targetingType?: string;
}

export interface Inline2797 {
  readonly placementBidding?: ReadonlyArray<Inline2797>;
  readonly shopperCohortBidding?: ReadonlyArray<Inline2798>;
  readonly strategy?: string;
}

export interface Inline2798 {
  readonly audienceSegments?: ReadonlyArray<Inline2798>;
  readonly percentage?: number;
  readonly shopperCohortType: string;
}

export interface Inline2799 {
  readonly offAmazonBudgetControlStrategy?: string;
}

export interface Inline28 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline280 {
  readonly attributeName?: string;
  readonly criteria?: Inline280 | Inline281;
}

export interface Inline2800 {

}

export interface Inline2803 {
  readonly budget?: Inline2803;
  readonly campaignId: string;
  readonly dynamicBidding?: Inline2804;
  readonly endDate?: string;
  readonly name?: string;
  readonly offAmazonSettings?: Inline2806;
  readonly portfolioId?: string;
  readonly siteRestrictions?: ReadonlyArray<string>;
  readonly startDate?: string;
  readonly state?: string;
  readonly tags?: Inline2807;
  readonly targetingType?: string;
}

export interface Inline2804 {
  readonly placementBidding?: ReadonlyArray<Inline2804>;
  readonly shopperCohortBidding?: ReadonlyArray<Inline2805>;
  readonly strategy?: string;
}

export interface Inline2805 {
  readonly audienceSegments?: ReadonlyArray<Inline2805>;
  readonly percentage?: number;
  readonly shopperCohortType: string;
}

export interface Inline2806 {
  readonly offAmazonBudgetControlStrategy?: string;
}

export interface Inline2807 {

}

export interface Inline2809 {
  readonly associatedRules?: ReadonlyArray<Inline2809>;
}

export interface Inline281 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline2810 {
  readonly dateRangeTypeRuleDuration?: Inline2810;
  readonly eventTypeRuleDuration?: Inline2811;
}

export interface Inline2811 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline2812 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline2813 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline2813>;
  readonly type?: string;
}

export interface Inline2818 {

}

export interface Inline282 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly duration: Inline282;
  readonly timesOfDay?: ReadonlyArray<Inline283>;
  readonly type: string;
}

export interface Inline2825 {
  readonly budgetRecommendationsErrorResults: ReadonlyArray<Inline2825>;
  readonly budgetRecommendationsSuccessResults: ReadonlyArray<Inline2826>;
}

export interface Inline2826 {
  readonly budgetRuleRecommendation: Inline2826;
  readonly campaignId: string;
  readonly index: number;
  readonly sevenDaysMissedOpportunities: Inline2827;
  readonly suggestedBudget: number;
}

export interface Inline2827 {
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

export interface Inline2829 {
  readonly campaignId: string;
}

export interface Inline283 {
  readonly endTime: string;
  readonly startTime: string;
}

export interface Inline2831 {
  readonly recommendedBudgetRuleEvents?: ReadonlyArray<Inline2831>;
}

export interface Inline2833 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2836 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2837 {
  readonly adGroupId?: string;
  readonly asins: ReadonlyArray<string>;
  readonly targetingExpressions: ReadonlyArray<Inline2837>;
}

export interface Inline2838 {
  readonly adjustments?: ReadonlyArray<Inline2838>;
  readonly strategy: string;
}

export interface Inline2840 {
  readonly benchmark: Inline2840;
  readonly dailyBudget: number;
  readonly recommendationId?: string;
  readonly specialEvents: ReadonlyArray<Inline2843>;
}

export interface Inline2841 {
  readonly lower?: number;
  readonly upper?: number;
}

export interface Inline2842 {
  readonly lower?: number;
  readonly upper?: number;
}

export interface Inline2843 {
  readonly benchmark?: Inline2843;
  readonly budgetModifier?: number;
  readonly dailyBudget?: number;
  readonly endDate?: string;
  readonly eventKey?: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline2844 {
  readonly lower?: number;
  readonly upper?: number;
}

export interface Inline2845 {
  readonly lower?: number;
  readonly upper?: number;
}

export interface Inline2847 {
  readonly adGroupId?: string;
  readonly asins: ReadonlyArray<string>;
  readonly targetingExpressions: ReadonlyArray<Inline2847>;
}

export interface Inline2848 {
  readonly adjustments?: ReadonlyArray<Inline2848>;
  readonly strategy: string;
}

export interface Inline2849 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline285 {
  readonly action?: Inline285;
  readonly conditions?: ReadonlyArray<Inline286>;
  readonly recurrence?: Inline288;
  readonly ruleCategory: string;
  readonly ruleName: string;
  readonly ruleSubCategory: string;
  readonly status: string;
  readonly targeting?: ReadonlyArray<Inline290>;
}

export interface Inline2850 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2851 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline2852 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2853 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2855 {
  readonly campaigns?: ReadonlyArray<Inline2855>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}

export interface Inline2856 {
  readonly placementBidding?: ReadonlyArray<Inline2856>;
  readonly shopperCohortBidding?: ReadonlyArray<Inline2857>;
  readonly strategy: string;
}

export interface Inline2857 {
  readonly audienceSegments?: ReadonlyArray<Inline2857>;
  readonly percentage?: number;
  readonly shopperCohortType: string;
}

export interface Inline2858 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline2858>;
}

export interface Inline2859 {
  readonly offAmazonBudgetControlStrategy?: string;
}

export interface Inline286 {
  readonly attributeName?: string;
  readonly criteria?: Inline286 | Inline287;
}

export interface Inline2860 {

}

export interface Inline2862 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2863 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2864 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline2865 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2866 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2867 {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly countryCodes?: ReadonlyArray<string>;
  readonly includeAnalysis?: boolean;
  readonly recommendationType: string;
  readonly targetingExpressions: ReadonlyArray<Inline2867>;
}

export interface Inline2868 {
  readonly bidding: Inline2868;
  readonly countryCodes: ReadonlyArray<string>;
  readonly includeAnalysis?: boolean;
  readonly products?: ReadonlyArray<Inline2869>;
  readonly recommendationType: string;
  readonly targetingExpressions: ReadonlyArray<Inline2870>;
}

export interface Inline2869 {

}

export interface Inline287 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline2870 {
  readonly countryValues?: unknown;
  readonly type: string;
}

export interface Inline2872 {
  readonly bidRecommendations: ReadonlyArray<Inline2872>;
  readonly errors?: ReadonlyArray<Inline2874>;
}

export interface Inline2873 {
  readonly countrySuggestedBids: unknown;
  readonly expression: Inline2873;
}

export interface Inline2874 {
  readonly code?: string;
  readonly countryCodes?: ReadonlyArray<string>;
  readonly message?: string;
}

export interface Inline2876 {
  readonly products?: ReadonlyArray<Inline2876>;
  readonly targets?: ReadonlyArray<Inline2877>;
  readonly biddingStrategy?: string;
  readonly bidsEnabled?: boolean;
  readonly recommendationType: string;
}

export interface Inline2877 {
  readonly countryKeywords?: Inline2877;
  readonly matchType?: string;
}

export interface Inline2878 {
  readonly targets?: ReadonlyArray<Inline2878>;
  readonly adGroupId: string;
  readonly bidsEnabled?: boolean;
  readonly campaignId: string;
  readonly recommendationType: string;
}

export interface Inline288 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly duration: Inline288;
  readonly timesOfDay?: ReadonlyArray<Inline289>;
  readonly type: string;
}

export interface Inline2880 {
  readonly countryCodes?: Inline2880;
}

export interface Inline2882 {
  readonly adGroupId: string;
  readonly bid?: number;
  readonly campaignId: string;
  readonly keywordText: string;
  readonly matchType: string;
  readonly nativeLanguageKeyword?: string;
  readonly nativeLanguageLocale?: string;
  readonly state: string;
}

export interface Inline2885 {
  readonly adGroupId: string;
  readonly bid?: number;
  readonly campaignId: string;
  readonly keywordText: string;
  readonly matchType: string;
  readonly nativeLanguageKeyword?: string;
  readonly nativeLanguageLocale?: string;
  readonly state: string;
}

export interface Inline2886 {
  readonly bid?: number;
  readonly keywordId: string;
  readonly state?: string;
}

export interface Inline2889 {
  readonly bid?: number;
  readonly keywordId: string;
  readonly state?: string;
}

export interface Inline289 {
  readonly endTime: string;
  readonly startTime: string;
}

export interface Inline2890 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2893 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2894 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2895 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2896 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2897 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType: string;
}

export interface Inline2898 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline290 {
  readonly expressionTypes: ReadonlyArray<string>;
  readonly lookbackDays: number;
  readonly targetingType: string;
}

export interface Inline2900 {
  readonly keywords?: ReadonlyArray<Inline2900>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}

export interface Inline2902 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2903 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2904 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2905 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType: string;
}

export interface Inline2906 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2907 {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly keywordText: string;
  readonly matchType: string;
  readonly nativeLanguageKeyword?: string;
  readonly nativeLanguageLocale?: string;
  readonly state: string;
}

export interface Inline2910 {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly keywordText: string;
  readonly matchType: string;
  readonly nativeLanguageKeyword?: string;
  readonly nativeLanguageLocale?: string;
  readonly state: string;
}

export interface Inline2911 {
  readonly keywordId: string;
  readonly state?: string;
}

export interface Inline2914 {
  readonly keywordId: string;
  readonly state?: string;
}

export interface Inline2915 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2918 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2919 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline292 {
  readonly code?: string;
  readonly details?: string;
  readonly optimizationRule?: Inline292;
}

export interface Inline2920 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2921 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2922 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType: string;
}

export interface Inline2923 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2925 {
  readonly negativeKeywords?: ReadonlyArray<Inline2925>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}

export interface Inline2927 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2928 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2929 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline293 {
  readonly attributeName?: string;
  readonly criteria?: Inline293 | Inline294;
}

export interface Inline2930 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType: string;
}

export interface Inline2931 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2932 {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly expression: ReadonlyArray<Inline2932>;
  readonly state: string;
}

export interface Inline2935 {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly expression: ReadonlyArray<Inline2935>;
  readonly state: string;
}

export interface Inline2936 {
  readonly expression?: ReadonlyArray<Inline2936>;
  readonly state?: string;
  readonly targetId: string;
}

export interface Inline2939 {
  readonly expression?: ReadonlyArray<Inline2939>;
  readonly state?: string;
  readonly targetId: string;
}

export interface Inline294 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline2941 {
  readonly id?: string;
  readonly name?: string;
}

export interface Inline2944 {
  readonly id?: string;
  readonly name?: string;
}

export interface Inline2946 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2949 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline295 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly duration: Inline295;
  readonly timesOfDay?: ReadonlyArray<Inline296>;
  readonly type: string;
}

export interface Inline2950 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2951 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline2952 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2953 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2954 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2956 {
  readonly negativeTargetingClauses?: ReadonlyArray<Inline2956>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}

export interface Inline2957 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline2957>;
}

export interface Inline2958 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline296 {
  readonly endTime: string;
  readonly startTime: string;
}

export interface Inline2960 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2961 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline2962 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2963 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2964 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2965 {
  readonly adGroupId: string;
  readonly asin?: string;
  readonly campaignId: string;
  readonly customText?: string;
  readonly globalStoreSetting?: Inline2965;
  readonly sku?: string;
  readonly state: string;
}

export interface Inline2968 {
  readonly adGroupId: string;
  readonly asin?: string;
  readonly campaignId: string;
  readonly customText?: string;
  readonly globalStoreSetting?: Inline2968;
  readonly sku?: string;
  readonly state: string;
}

export interface Inline2969 {
  readonly adId: string;
  readonly state?: string;
}

export interface Inline297 {
  readonly expressionTypes: ReadonlyArray<string>;
  readonly lookbackDays: number;
  readonly targetingType: string;
}

export interface Inline2972 {
  readonly adId: string;
  readonly state?: string;
}

export interface Inline2973 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2976 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2977 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2978 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2979 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2980 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2982 {
  readonly nextToken?: string;
  readonly productAds?: ReadonlyArray<Inline2982>;
  readonly totalResults?: number;
}

export interface Inline2983 {
  readonly catalogSourceCountryCode?: string;
}

export interface Inline2985 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2986 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2987 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2988 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2989 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline2991 {
  readonly campaignOptimizationId?: string;
  readonly code?: string;
  readonly details?: string;
}

export interface Inline2993 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline2994 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline2996 {
  readonly campaignOptimizationId?: string;
  readonly code?: string;
  readonly details?: string;
}

export interface Inline2998 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline30 {
  readonly adjustments?: ReadonlyArray<Inline30>;
  readonly strategy: string;
}

export interface Inline3000 {
  readonly campaignOptimizationId?: string;
  readonly code?: string;
  readonly details?: string;
}

export interface Inline3003 {
  readonly CampaignOptimizationRule?: Inline3003;
}

export interface Inline3006 {
  readonly CampaignOptimizationRecommendations?: ReadonlyArray<Inline3006>;
  readonly CampaignOptimizationRecommendationsError?: ReadonlyArray<Inline3007>;
}

export interface Inline3007 {
  readonly Error?: Inline3007;
  readonly campaignId?: string;
}

export interface Inline3010 {
  readonly CampaignOptimizationNotifications?: ReadonlyArray<Inline3010>;
  readonly CampaignOptimizationRecommendationsError?: ReadonlyArray<Inline3011>;
}

export interface Inline3011 {
  readonly Error?: Inline3011;
  readonly campaignId?: string;
}

export interface Inline3013 {
  readonly action: Inline3013;
  readonly conditions?: ReadonlyArray<Inline3014>;
  readonly recurrence: Inline3016;
  readonly ruleCategory: string;
  readonly ruleName?: string;
  readonly ruleSubCategory: string;
  readonly status?: string;
}

export interface Inline3014 {
  readonly attributeName?: string;
  readonly criteria?: Inline3014 | Inline3015;
}

export interface Inline3015 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline3016 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly duration: Inline3016;
  readonly timesOfDay?: ReadonlyArray<Inline3017>;
  readonly type: string;
}

export interface Inline3017 {
  readonly endTime: string;
  readonly startTime: string;
}

export interface Inline3020 {
  readonly action: Inline3020;
  readonly conditions?: ReadonlyArray<Inline3021>;
  readonly recurrence: Inline3023;
  readonly ruleCategory: string;
  readonly ruleName?: string;
  readonly ruleSubCategory: string;
  readonly status?: string;
}

export interface Inline3021 {
  readonly attributeName?: string;
  readonly criteria?: Inline3021 | Inline3022;
}

export interface Inline3022 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline3023 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly duration: Inline3023;
  readonly timesOfDay?: ReadonlyArray<Inline3024>;
  readonly type: string;
}

export interface Inline3024 {
  readonly endTime: string;
  readonly startTime: string;
}

export interface Inline3025 {
  readonly action?: Inline3025;
  readonly conditions?: ReadonlyArray<Inline3026>;
  readonly recurrence?: Inline3028;
  readonly ruleCategory?: string;
  readonly ruleName?: string;
  readonly ruleSubCategory?: string;
  readonly status?: string;
  readonly optimizationRuleId?: string;
}

export interface Inline3026 {
  readonly attributeName?: string;
  readonly criteria?: Inline3026 | Inline3027;
}

export interface Inline3027 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline3028 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly duration: Inline3028;
  readonly timesOfDay?: ReadonlyArray<Inline3029>;
  readonly type: string;
}

export interface Inline3029 {
  readonly endTime: string;
  readonly startTime: string;
}

export interface Inline3032 {
  readonly action?: Inline3032;
  readonly conditions?: ReadonlyArray<Inline3033>;
  readonly recurrence?: Inline3035;
  readonly ruleCategory?: string;
  readonly ruleName?: string;
  readonly ruleSubCategory?: string;
  readonly status?: string;
  readonly optimizationRuleId?: string;
}

export interface Inline3033 {
  readonly attributeName?: string;
  readonly criteria?: Inline3033 | Inline3034;
}

export interface Inline3034 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline3035 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly duration: Inline3035;
  readonly timesOfDay?: ReadonlyArray<Inline3036>;
  readonly type: string;
}

export interface Inline3036 {
  readonly endTime: string;
  readonly startTime: string;
}

export interface Inline3037 {
  readonly campaignId?: Inline3037;
}

export interface Inline3038 {
  readonly optimizationRuleId?: Inline3038;
  readonly ruleCategory?: Inline3039;
  readonly ruleSubCategory?: Inline3040;
}

export interface Inline3039 {
  readonly filterType?: string;
  readonly values?: ReadonlyArray<string>;
}

export interface Inline304 {
  readonly actionDetails: Inline304;
  readonly actionType: string;
}

export interface Inline3040 {
  readonly filterType?: string;
  readonly values?: ReadonlyArray<string>;
}

export interface Inline3042 {
  readonly code?: string;
  readonly nextToken?: string;
  readonly optimizationRules?: ReadonlyArray<Inline3042>;
}

export interface Inline3043 {
  readonly attributeName?: string;
  readonly criteria?: Inline3043 | Inline3044;
}

export interface Inline3044 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline3045 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly duration: Inline3045;
  readonly timesOfDay?: ReadonlyArray<Inline3046>;
  readonly type: string;
}

export interface Inline3046 {
  readonly endTime: string;
  readonly startTime: string;
}

export interface Inline3048 {
  readonly campaignId?: Inline3048;
}

export interface Inline3049 {
  readonly optimizationRuleId?: Inline3049;
  readonly ruleCategory?: Inline3050;
  readonly ruleSubCategory?: Inline3051;
}

export interface Inline305 {
  readonly attributeName?: string;
  readonly criteria?: Inline305 | Inline306;
}

export interface Inline3050 {
  readonly filterType?: string;
  readonly values?: ReadonlyArray<string>;
}

export interface Inline3051 {
  readonly filterType?: string;
  readonly values?: ReadonlyArray<string>;
}

export interface Inline3053 {
  readonly countryCode?: string;
  readonly keywordGroups: ReadonlyArray<Inline3053>;
  readonly nextToken?: string;
}

export interface Inline3055 {
  readonly keywordCampaignAdGroupIds?: ReadonlyArray<string>;
  readonly productCampaignAdGroupIds?: ReadonlyArray<string>;
}

export interface Inline3056 {
  readonly budget: Inline3056;
  readonly defaultBid: number;
  readonly dynamicBidding?: Inline3057;
  readonly endDate?: string;
  readonly namePrefix: string;
  readonly startDate?: string;
  readonly tags?: Inline3058;
}

export interface Inline3057 {
  readonly placementBidding?: ReadonlyArray<Inline3057>;
  readonly strategy: string;
}

export interface Inline3058 {

}

export interface Inline306 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline3060 {
  readonly targetPromotionGroup?: Inline3060;
}

export interface Inline3062 {
  readonly keywordCampaignAdGroupIds?: ReadonlyArray<string>;
  readonly productCampaignAdGroupIds?: ReadonlyArray<string>;
}

export interface Inline3063 {
  readonly budget: Inline3063;
  readonly defaultBid: number;
  readonly dynamicBidding?: Inline3064;
  readonly endDate?: string;
  readonly namePrefix: string;
  readonly startDate?: string;
  readonly tags?: Inline3065;
}

export interface Inline3064 {
  readonly placementBidding?: ReadonlyArray<Inline3064>;
  readonly strategy: string;
}

export interface Inline3065 {

}

export interface Inline3066 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3067 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3069 {
  readonly nextToken?: string;
  readonly targetPromotionGroups?: ReadonlyArray<Inline3069>;
  readonly totalResults?: number;
}

export interface Inline307 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly duration: Inline307;
  readonly timesOfDay?: ReadonlyArray<Inline308>;
  readonly type: string;
}

export interface Inline3071 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3072 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3073 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3074 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3075 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3077 {
  readonly nextToken?: string;
  readonly targets: ReadonlyArray<Inline3077>;
  readonly totalResults: number;
}

export interface Inline3079 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline308 {
  readonly endTime: string;
  readonly startTime: string;
}

export interface Inline3080 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3081 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3082 {
  readonly bid?: number;
  readonly expressionType: string;
  readonly target: string;
}

export interface Inline3085 {
  readonly bid?: number;
  readonly expressionType: string;
  readonly target: string;
}

export interface Inline3086 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3087 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3089 {
  readonly nextToken?: string;
  readonly targets?: ReadonlyArray<Inline3089>;
  readonly totalResults?: number;
}

export interface Inline3091 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3092 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3093 {
  readonly adGroupId: string;
  readonly bid?: number;
  readonly campaignId: string;
  readonly expression: ReadonlyArray<Inline3093>;
  readonly expressionType: string;
  readonly state: string;
}

export interface Inline3096 {
  readonly adGroupId: string;
  readonly bid?: number;
  readonly campaignId: string;
  readonly expression: ReadonlyArray<Inline3096>;
  readonly expressionType: string;
  readonly state: string;
}

export interface Inline3097 {
  readonly bid?: number;
  readonly expression?: ReadonlyArray<Inline3097>;
  readonly expressionType?: string;
  readonly state?: string;
  readonly targetId: string;
}

export interface Inline31 {
  readonly asin?: string;
  readonly globalStoreSetting?: Inline31;
}

export interface Inline310 {
  readonly filterType?: string;
  readonly values?: ReadonlyArray<string>;
}

export interface Inline3100 {
  readonly bid?: number;
  readonly expression?: ReadonlyArray<Inline3100>;
  readonly expressionType?: string;
  readonly state?: string;
  readonly targetId: string;
}

export interface Inline3101 {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly recommendationType: string;
  readonly targetingExpressions: ReadonlyArray<Inline3101>;
}

export interface Inline3102 {
  readonly asins: ReadonlyArray<string>;
  readonly bidding: Inline3102;
  readonly recommendationType: string;
  readonly targetingExpressions: ReadonlyArray<Inline3103>;
}

export interface Inline3103 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline3105 {
  readonly bidRecommendations: ReadonlyArray<Inline3105>;
}

export interface Inline3106 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline3107 {
  readonly clicks?: Inline3107;
  readonly orders?: Inline3108;
}

export interface Inline3108 {
  readonly values?: ReadonlyArray<Inline3108>;
}

export interface Inline311 {
  readonly filterType?: string;
  readonly values?: ReadonlyArray<string>;
}

export interface Inline3111 {
  readonly categoryTree?: string;
}

export interface Inline3114 {
  readonly categories?: ReadonlyArray<Inline3114>;
}

export interface Inline3117 {
  readonly ageRanges?: ReadonlyArray<Inline3117>;
  readonly brands?: ReadonlyArray<Inline3118>;
  readonly genres?: ReadonlyArray<Inline3119>;
}

export interface Inline3118 {
  readonly id?: string;
  readonly name?: string;
}

export interface Inline3119 {
  readonly id?: string;
  readonly name?: string;
}

export interface Inline312 {
  readonly filterType?: string;
  readonly values?: ReadonlyArray<string>;
}

export interface Inline3121 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3124 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3125 {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly recommendationType: string;
  readonly targets?: ReadonlyArray<Inline3125>;
}

export interface Inline3126 {
  readonly asins: ReadonlyArray<string>;
  readonly recommendationType: string;
  readonly targets?: ReadonlyArray<Inline3126>;
}

export interface Inline3128 {
  readonly rank?: number;
  readonly suggestedBid?: Inline3128;
  readonly translation?: string;
  readonly bid?: number;
  readonly keyword?: string;
  readonly matchType?: string;
  readonly userSelectedKeyword?: boolean;
}

export interface Inline3130 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3131 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline3132 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3133 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3134 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3135 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3137 {
  readonly nextToken?: string;
  readonly targetingClauses?: ReadonlyArray<Inline3137>;
  readonly totalResults?: number;
}

export interface Inline3138 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline3138>;
}

export interface Inline3139 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline314 {
  readonly filterType?: string;
  readonly values?: ReadonlyArray<string>;
}

export interface Inline3141 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3142 {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface Inline3143 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3144 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3145 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3146 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline3147 {
  readonly id?: string;
  readonly name?: string;
}

export interface Inline3148 {
  readonly id?: string;
  readonly name?: string;
}

export interface Inline3149 {
  readonly id?: string;
  readonly name?: string;
}

export interface Inline315 {
  readonly filterType?: string;
  readonly values?: ReadonlyArray<string>;
}

export interface Inline3150 {
  readonly max?: number;
  readonly min?: number;
}

export interface Inline3151 {
  readonly max?: number;
  readonly min?: number;
}

export interface Inline3153 {
  readonly asinCounts?: Inline3153;
}

export interface Inline3155 {
  readonly id?: string;
  readonly name?: string;
}

export interface Inline3156 {
  readonly id?: string;
  readonly name?: string;
}

export interface Inline3157 {
  readonly id?: string;
  readonly name?: string;
}

export interface Inline3158 {
  readonly max?: number;
  readonly min?: number;
}

export interface Inline3159 {
  readonly max?: number;
  readonly min?: number;
}

export interface Inline316 {
  readonly filterType?: string;
  readonly values?: ReadonlyArray<string>;
}

export interface Inline3161 {
  readonly nextCursor?: string;
  readonly previousCursor?: string;
  readonly recommendations?: ReadonlyArray<Inline3161>;
}

export interface Inline3164 {
  readonly events?: ReadonlyArray<Inline3164>;
  readonly groupedEvents?: ReadonlyArray<Inline3165>;
}

export interface Inline3165 {
  readonly endDate?: string;
  readonly groupedEventId?: string;
  readonly groupedEventName?: string;
  readonly startDate?: string;
}

export interface Inline317 {
  readonly filterType?: string;
  readonly values?: ReadonlyArray<string>;
}

export interface Inline318 {
  readonly filterType?: string;
  readonly values?: ReadonlyArray<string>;
}

export interface Inline32 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline321 {
  readonly code?: string;
  readonly details?: string;
  readonly optimizationRule?: Inline321;
}

export interface Inline322 {
  readonly attributeName?: string;
  readonly criteria?: Inline322 | Inline323;
}

export interface Inline323 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline324 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly duration: Inline324;
  readonly timesOfDay?: ReadonlyArray<Inline325>;
  readonly type: string;
}

export interface Inline325 {
  readonly endTime: string;
  readonly startTime: string;
}

export interface Inline327 {
  readonly code?: string;
  readonly details?: string;
  readonly optimizationRule?: Inline327;
}

export interface Inline328 {
  readonly attributeName?: string;
  readonly criteria?: Inline328 | Inline329;
}

export interface Inline329 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline330 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly duration: Inline330;
  readonly timesOfDay?: ReadonlyArray<Inline331>;
  readonly type: string;
}

export interface Inline331 {
  readonly endTime: string;
  readonly startTime: string;
}

export interface Inline332 {
  readonly expressionTypes: ReadonlyArray<string>;
  readonly lookbackDays: number;
  readonly targetingType: string;
}

export interface Inline334 {
  readonly actionDetails: Inline334;
  readonly actionType: string;
}

export interface Inline335 {
  readonly attributeName?: string;
  readonly criteria?: Inline335 | Inline336;
}

export interface Inline336 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline337 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly duration: Inline337;
  readonly timesOfDay?: ReadonlyArray<Inline338>;
  readonly type: string;
}

export interface Inline338 {
  readonly endTime: string;
  readonly startTime: string;
}

export interface Inline339 {
  readonly expressionTypes: ReadonlyArray<string>;
  readonly lookbackDays: number;
  readonly targetingType: string;
}

export interface Inline341 {
  readonly actionDetails: Inline341;
  readonly actionType: string;
}

export interface Inline342 {
  readonly attributeName?: string;
  readonly criteria?: Inline342 | Inline343;
}

export interface Inline343 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline344 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly duration: Inline344;
  readonly timesOfDay?: ReadonlyArray<Inline345>;
  readonly type: string;
}

export interface Inline345 {
  readonly endTime: string;
  readonly startTime: string;
}

export interface Inline347 {
  readonly actionDetails: Inline347;
  readonly actionType: string;
}

export interface Inline348 {
  readonly attributeName?: string;
  readonly criteria?: Inline348 | Inline349;
}

export interface Inline349 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline350 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly duration: Inline350;
  readonly timesOfDay?: ReadonlyArray<Inline351>;
  readonly type: string;
}

export interface Inline351 {
  readonly endTime: string;
  readonly startTime: string;
}

export interface Inline352 {
  readonly expressionTypes: ReadonlyArray<string>;
  readonly lookbackDays: number;
  readonly targetingType: string;
}

export interface Inline355 {
  readonly actionOperator: string;
  readonly actionUnit: string;
  readonly value: number;
}

export interface Inline362 {
  readonly maxValue: number;
  readonly minValue: number;
}

export interface Inline363 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline365 {
  readonly maxValue: number;
  readonly minValue: number;
}

export interface Inline366 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline368 {
  readonly maxValue: number;
  readonly minValue: number;
}

export interface Inline369 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline371 {
  readonly endTime?: string;
  readonly eventId?: string;
  readonly eventName?: string;
  readonly startTime?: string;
}

export interface Inline372 {
  readonly endTime: string;
  readonly startTime: string;
}

export interface Inline379 {
  readonly campaignId?: Inline379;
}

export interface Inline38 {
  readonly clicks?: Inline38;
  readonly conversions?: Inline39;
  readonly impressions?: Inline40;
}

export interface Inline380 {
  readonly optimizationRuleId?: Inline380;
  readonly ruleCategory?: Inline381;
  readonly ruleSubCategory?: Inline382;
}

export interface Inline381 {
  readonly filterType?: string;
  readonly values?: ReadonlyArray<string>;
}

export interface Inline382 {
  readonly filterType?: string;
  readonly values?: ReadonlyArray<string>;
}

export interface Inline384 {
  readonly campaignId?: Inline384;
}

export interface Inline385 {
  readonly optimizationRuleId?: Inline385;
  readonly ruleCategory?: Inline386;
  readonly ruleName?: Inline387;
  readonly ruleStatus?: Inline388;
  readonly ruleSubCategory?: Inline389;
}

export interface Inline386 {
  readonly filterType?: string;
  readonly values?: ReadonlyArray<string>;
}

export interface Inline387 {
  readonly filterType?: string;
  readonly values?: ReadonlyArray<string>;
}

export interface Inline388 {
  readonly filterType?: string;
  readonly values?: ReadonlyArray<string>;
}

export interface Inline389 {
  readonly filterType?: string;
  readonly values?: ReadonlyArray<string>;
}

export interface Inline39 {
  readonly lower?: number;
  readonly upper?: number;
}

export interface Inline391 {
  readonly action?: Inline391;
  readonly conditions?: ReadonlyArray<Inline392>;
  readonly recurrence?: Inline394;
  readonly ruleCategory?: string;
  readonly ruleName?: string;
  readonly ruleSubCategory?: string;
  readonly status?: string;
  readonly optimizationRuleId?: string;
}

export interface Inline392 {
  readonly attributeName?: string;
  readonly criteria?: Inline392 | Inline393;
}

export interface Inline393 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline394 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly duration: Inline394;
  readonly timesOfDay?: ReadonlyArray<Inline395>;
  readonly type: string;
}

export interface Inline395 {
  readonly endTime: string;
  readonly startTime: string;
}

export interface Inline397 {
  readonly action?: Inline397;
  readonly conditions?: ReadonlyArray<Inline398>;
  readonly recurrence?: Inline400;
  readonly ruleCategory?: string;
  readonly ruleName?: string;
  readonly ruleSubCategory?: string;
  readonly status?: string;
  readonly targeting?: ReadonlyArray<Inline402>;
  readonly optimizationRuleId?: string;
}

export interface Inline398 {
  readonly attributeName?: string;
  readonly criteria?: Inline398 | Inline399;
}

export interface Inline399 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline4 {
  readonly bid?: number;
  readonly keyword?: string;
  readonly matchType?: string;
  readonly userSelectedKeyword?: boolean;
}

export interface Inline40 {
  readonly lower?: number;
  readonly upper?: number;
}

export interface Inline400 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly duration: Inline400;
  readonly timesOfDay?: ReadonlyArray<Inline401>;
  readonly type: string;
}

export interface Inline401 {
  readonly endTime: string;
  readonly startTime: string;
}

export interface Inline402 {
  readonly expressionTypes: ReadonlyArray<string>;
  readonly lookbackDays: number;
  readonly targetingType: string;
}

export interface Inline405 {
  readonly action?: Inline405;
  readonly conditions?: ReadonlyArray<Inline406>;
  readonly recurrence?: Inline408;
  readonly ruleCategory?: string;
  readonly ruleName?: string;
  readonly ruleSubCategory?: string;
  readonly status?: string;
  readonly optimizationRuleId?: string;
}

export interface Inline406 {
  readonly attributeName?: string;
  readonly criteria?: Inline406 | Inline407;
}

export interface Inline407 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline408 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly duration: Inline408;
  readonly timesOfDay?: ReadonlyArray<Inline409>;
  readonly type: string;
}

export interface Inline409 {
  readonly endTime: string;
  readonly startTime: string;
}

export interface Inline411 {
  readonly action?: Inline411;
  readonly conditions?: ReadonlyArray<Inline412>;
  readonly recurrence?: Inline414;
  readonly ruleCategory?: string;
  readonly ruleName?: string;
  readonly ruleSubCategory?: string;
  readonly status?: string;
  readonly targeting?: ReadonlyArray<Inline416>;
  readonly optimizationRuleId?: string;
}

export interface Inline412 {
  readonly attributeName?: string;
  readonly criteria?: Inline412 | Inline413;
}

export interface Inline413 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline414 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly duration: Inline414;
  readonly timesOfDay?: ReadonlyArray<Inline415>;
  readonly type: string;
}

export interface Inline415 {
  readonly endTime: string;
  readonly startTime: string;
}

export interface Inline416 {
  readonly expressionTypes: ReadonlyArray<string>;
  readonly lookbackDays: number;
  readonly targetingType: string;
}

export interface Inline42 {
  readonly bid: number;
  readonly impactMetrics: Inline42;
  readonly type: string;
}

export interface Inline420 {
  readonly action?: Inline420;
  readonly conditions?: ReadonlyArray<Inline421>;
  readonly recurrence?: Inline423;
  readonly ruleCategory?: string;
  readonly ruleName?: string;
  readonly ruleSubCategory?: string;
  readonly status?: string;
  readonly optimizationRuleId?: string;
}

export interface Inline421 {
  readonly attributeName?: string;
  readonly criteria?: Inline421 | Inline422;
}

export interface Inline422 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline423 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly duration: Inline423;
  readonly timesOfDay?: ReadonlyArray<Inline424>;
  readonly type: string;
}

export interface Inline424 {
  readonly endTime: string;
  readonly startTime: string;
}

export interface Inline426 {
  readonly action?: Inline426;
  readonly conditions?: ReadonlyArray<Inline427>;
  readonly recurrence?: Inline429;
  readonly ruleCategory?: string;
  readonly ruleName?: string;
  readonly ruleSubCategory?: string;
  readonly status?: string;
  readonly targeting?: ReadonlyArray<Inline431>;
  readonly optimizationRuleId?: string;
}

export interface Inline427 {
  readonly attributeName?: string;
  readonly criteria?: Inline427 | Inline428;
}

export interface Inline428 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline429 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly duration: Inline429;
  readonly timesOfDay?: ReadonlyArray<Inline430>;
  readonly type: string;
}

export interface Inline430 {
  readonly endTime: string;
  readonly startTime: string;
}

export interface Inline431 {
  readonly expressionTypes: ReadonlyArray<string>;
  readonly lookbackDays: number;
  readonly targetingType: string;
}

export interface Inline433 {
  readonly code?: string;
  readonly details?: string;
  readonly optimizationRule?: Inline433;
}

export interface Inline434 {
  readonly attributeName?: string;
  readonly criteria?: Inline434 | Inline435;
}

export interface Inline435 {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface Inline436 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly duration: Inline436;
  readonly timesOfDay?: ReadonlyArray<Inline437>;
  readonly type: string;
}

export interface Inline437 {
  readonly endTime: string;
  readonly startTime: string;
}

export interface Inline438 {
  readonly expressionTypes: ReadonlyArray<string>;
  readonly lookbackDays: number;
  readonly targetingType: string;
}

export interface Inline44 {
  readonly bid: number;
  readonly impactMetrics: Inline44;
  readonly type: string;
}

export interface Inline446 {
  readonly catalogSourceCountryCode?: string;
}

export interface Inline448 {
  readonly asin?: string;
  readonly globalStoreSetting?: Inline448;
}

export interface Inline45 {
  readonly bid: number;
  readonly impactMetrics: Inline45;
  readonly type: string;
}

export interface Inline451 {
  readonly recommendedAsin?: string;
  readonly themes?: ReadonlyArray<string>;
}

export interface Inline453 {
  readonly description?: string;
  readonly recommendedAsins?: ReadonlyArray<string>;
  readonly theme?: string;
}

export interface Inline456 {
  readonly bid?: number;
  readonly keyword?: string;
  readonly matchType?: string;
  readonly userSelectedKeyword?: boolean;
}

export interface Inline458 {
  readonly asin?: string;
  readonly globalStoreSetting?: Inline458;
}

export interface Inline459 {
  readonly bid?: number;
  readonly keyword?: string;
  readonly matchType?: string;
  readonly userSelectedKeyword?: boolean;
}

export interface Inline46 {
  readonly bid: number;
  readonly impactMetrics: Inline46;
  readonly type: string;
}

export interface Inline461 {
  readonly bidInfo?: ReadonlyArray<Inline461>;
  readonly keyword?: string;
  readonly recId?: string;
  readonly searchTermImpressionRank?: number;
  readonly searchTermImpressionShare?: number;
  readonly translation?: string;
  readonly userSelectedKeyword?: boolean;
}

export interface Inline463 {
  readonly bid?: number;
  readonly matchType?: string;
  readonly rank?: number;
  readonly suggestedBid?: Inline463;
  readonly theme?: string;
}

export interface Inline465 {
  readonly bidInfo?: ReadonlyArray<Inline465>;
  readonly keyword?: string;
  readonly recId?: string;
  readonly searchTermImpressionRank?: number;
  readonly searchTermImpressionShare?: number;
  readonly translation?: string;
  readonly userSelectedKeyword?: boolean;
}

export interface Inline467 {
  readonly clicks?: Inline467;
  readonly orders?: Inline468;
}

export interface Inline468 {
  readonly values?: ReadonlyArray<Inline468>;
}

export interface Inline469 {
  readonly bidInfo?: ReadonlyArray<Inline469>;
  readonly keyword?: string;
  readonly recId?: string;
  readonly searchTermImpressionRank?: number;
  readonly searchTermImpressionShare?: number;
  readonly translation?: string;
  readonly userSelectedKeyword?: boolean;
}

export interface Inline47 {
  readonly bid: number;
  readonly impactMetrics: Inline47;
  readonly type: string;
}

export interface Inline472 {
  readonly bid?: number;
  readonly matchType?: string;
  readonly rank?: number;
  readonly suggestedBid?: Inline472;
}

export interface Inline474 {
  readonly endDate?: string;
  readonly estimatedAdSpendLower?: number;
  readonly estimatedAdSpendUpper?: number;
  readonly estimatedIncrementalClicksLower?: number;
  readonly estimatedIncrementalClicksUpper?: number;
  readonly estimatedIncrementalConversionsLower?: number;
  readonly estimatedIncrementalConversionsUpper?: number;
  readonly estimatedIncrementalImpressionsLower?: number;
  readonly estimatedIncrementalImpressionsUpper?: number;
  readonly estimatedIncrementalSalesLower?: number;
  readonly estimatedIncrementalSalesUpper?: number;
  readonly startDate?: string;
}

export interface Inline479 {
  readonly endTime?: string;
  readonly startTime?: string;
}

export interface Inline482 {
  readonly id?: string;
  readonly name?: string;
}

export interface Inline483 {
  readonly id?: string;
  readonly name?: string;
}

export interface Inline484 {
  readonly id?: string;
  readonly name?: string;
}

export interface Inline486 {
  readonly id?: string;
  readonly name?: string;
  readonly translatedName?: string;
}

export interface Inline487 {
  readonly id?: string;
  readonly name?: string;
}

export interface Inline488 {
  readonly id?: string;
  readonly name?: string;
  readonly translatedName?: string;
}

export interface Inline49 {
  readonly ALL: ReadonlyArray<Inline49>;
  readonly PLACEMENT_PRODUCT_PAGE: ReadonlyArray<Inline50>;
  readonly PLACEMENT_REST_OF_SEARCH: ReadonlyArray<Inline51>;
  readonly PLACEMENT_TOP: ReadonlyArray<Inline52>;
}

export interface Inline493 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline497 {
  readonly endDate?: string;
  readonly startDate: string;
}

export interface Inline498 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline50 {
  readonly bid: number;
  readonly impactMetrics: Inline50;
  readonly type: string;
}

export interface Inline502 {
  readonly code?: string;
  readonly details?: string;
}

export interface Inline504 {
  readonly roas?: number;
}

export interface Inline506 {
  readonly code?: string;
  readonly details?: string;
}

export interface Inline51 {
  readonly bid: number;
  readonly impactMetrics: Inline51;
  readonly type: string;
}

export interface Inline515 {
  readonly audienceId: string;
  readonly audienceSegmentType: string;
}

export interface Inline517 {
  readonly budgetIncreaseBy?: Inline517;
  readonly duration?: Inline518;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline520;
  readonly recurrence?: Inline521;
  readonly ruleType?: string;
}

export interface Inline518 {
  readonly dateRangeTypeRuleDuration?: Inline518;
  readonly eventTypeRuleDuration?: Inline519;
}

export interface Inline519 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline52 {
  readonly bid: number;
  readonly impactMetrics: Inline52;
  readonly type: string;
}

export interface Inline520 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline521 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline521>;
  readonly type?: string;
}

export interface Inline523 {
  readonly type: string;
  readonly value: number;
}

export interface Inline524 {
  readonly dateRangeTypeRuleDuration?: Inline524;
  readonly eventTypeRuleDuration?: Inline525;
}

export interface Inline525 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline526 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline527 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline527>;
  readonly type?: string;
}

export interface Inline53 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline532 {
  readonly endDate?: string;
  readonly eventId?: string;
  readonly eventName?: string;
  readonly startDate?: string;
  readonly suggestedBudgetIncreasePercent?: number;
}

export interface Inline534 {
  readonly budgetIncreaseBy?: Inline534;
  readonly duration?: Inline535;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline537;
  readonly recurrence?: Inline538;
  readonly ruleType?: string;
}

export interface Inline535 {
  readonly dateRangeTypeRuleDuration?: Inline535;
  readonly eventTypeRuleDuration?: Inline536;
}

export interface Inline536 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline537 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline538 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline538>;
  readonly type?: string;
}

export interface Inline541 {
  readonly campaignId?: string;
  readonly campaignOptimizationId?: string;
  readonly notificationString?: string;
  readonly ruleState?: string;
}

export interface Inline542 {
  readonly Error?: Inline542;
  readonly campaignId?: string;
}

export interface Inline544 {
  readonly campaignId?: string;
  readonly performanceMetrics?: Inline544;
  readonly performanceMetricsExists?: boolean;
}

export interface Inline545 {
  readonly Error?: Inline545;
  readonly campaignId?: string;
}

export interface Inline548 {
  readonly benchmarkStatus?: string;
  readonly values?: Inline548;
}

export interface Inline549 {
  readonly lower?: number;
  readonly upper?: number;
}

export interface Inline55 {
  readonly estimatedImpressionAvg: number;
  readonly estimatedImpressionLower: number;
  readonly estimatedImpressionUpper: number;
}

export interface Inline550 {
  readonly lower?: number;
  readonly upper?: number;
}

export interface Inline553 {
  readonly endDate?: string;
  readonly eventId?: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline554 {
  readonly endDate?: string;
  readonly groupedEventId?: string;
  readonly groupedEventName?: string;
  readonly startDate?: string;
}

export interface Inline556 {
  readonly campaignId: string;
  readonly campaignName: string;
  readonly ruleStatus: string;
}

export interface Inline561 {
  readonly errorCode?: string;
  readonly errorId?: number;
  readonly errorMessage?: string;
}

export interface Inline563 {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline563;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface Inline564 {
  readonly dateRangeTypeRuleDuration?: Inline564;
  readonly eventTypeRuleDuration?: Inline565;
}

export interface Inline565 {
  readonly endDate?: string;
  readonly eventId: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface Inline566 {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export interface Inline567 {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline567>;
  readonly type?: string;
}

export interface Inline572 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline575 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline575>;
}

export interface Inline577 {
  readonly entityNotFoundError?: Inline577;
  readonly internalServerError?: Inline578;
  readonly invalidInputError?: Inline579;
  readonly malformedValueError?: Inline580;
  readonly missingValueError?: Inline581;
  readonly otherError?: Inline582;
  readonly rangeError?: Inline583;
  readonly throttledError?: Inline584;
}

export interface Inline578 {
  readonly cause?: Inline578;
  readonly message: string;
  readonly reason: string;
}

export interface Inline579 {
  readonly cause?: Inline579;
  readonly message: string;
  readonly reason: string;
}

export interface Inline58 {
  readonly placementAdjustment?: Inline58;
}

export interface Inline580 {
  readonly cause?: Inline580;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline581 {
  readonly cause?: Inline581;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline582 {
  readonly cause?: Inline582;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline583 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline583;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline584 {
  readonly cause?: Inline584;
  readonly message: string;
  readonly reason: string;
}

export interface Inline586 {
  readonly cause?: Inline586;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline587 {
  readonly cause?: Inline587;
  readonly message: string;
  readonly reason: string;
}

export interface Inline588 {
  readonly cause?: Inline588;
  readonly message: string;
  readonly reason: string;
}

export interface Inline589 {
  readonly cause?: Inline589;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline590 {
  readonly cause?: Inline590;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline591 {
  readonly cause?: Inline591;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline592 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline592;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline593 {
  readonly cause?: Inline593;
  readonly message: string;
  readonly reason: string;
}

export interface Inline595 {
  readonly errorType: string;
  readonly errorValue: Inline595;
}

export interface Inline596 {
  readonly cause?: Inline596;
  readonly message: string;
  readonly reason: string;
}

export interface Inline597 {
  readonly cause?: Inline597;
  readonly message: string;
  readonly reason: string;
}

export interface Inline598 {
  readonly cause?: Inline598;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline599 {
  readonly cause?: Inline599;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline6 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline600 {
  readonly cause?: Inline600;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline601 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline601;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline602 {
  readonly cause?: Inline602;
  readonly message: string;
  readonly reason: string;
}

export interface Inline604 {
  readonly helpUrl?: string;
  readonly message?: string;
  readonly name?: string;
}

export interface Inline606 {
  readonly errorType: string;
  readonly errorValue: Inline606;
}

export interface Inline607 {
  readonly cause?: Inline607;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline608 {
  readonly cause?: Inline608;
  readonly message: string;
  readonly reason: string;
}

export interface Inline609 {
  readonly cause?: Inline609;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline610 {
  readonly cause?: Inline610;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline611 {
  readonly cause?: Inline611;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline612 {
  readonly cause?: Inline612;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline613 {
  readonly cause?: Inline613;
  readonly message: string;
  readonly reason: string;
}

export interface Inline614 {
  readonly cause?: Inline614;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline615 {
  readonly cause?: Inline615;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline616 {
  readonly cause?: Inline616;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline617 {
  readonly cause?: Inline617;
  readonly message: string;
  readonly reason: string;
}

export interface Inline618 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline618;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline619 {
  readonly cause?: Inline619;
  readonly message: string;
  readonly reason: string;
}

export interface Inline621 {
  readonly applicableMarketplacesError?: Inline621;
  readonly biddingError?: Inline622;
  readonly billingError?: Inline623;
  readonly duplicateValueError?: Inline624;
  readonly entityNotFoundError?: Inline625;
  readonly entityQuotaError?: Inline626;
  readonly entityStateError?: Inline627;
  readonly internalServerError?: Inline628;
  readonly malformedValueError?: Inline629;
  readonly missingValueError?: Inline630;
  readonly otherError?: Inline631;
  readonly parentEntityError?: Inline632;
  readonly rangeError?: Inline633;
  readonly throttledError?: Inline634;
}

export interface Inline622 {
  readonly cause?: Inline622;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline623 {
  readonly cause?: Inline623;
  readonly message: string;
  readonly reason: string;
}

export interface Inline624 {
  readonly cause?: Inline624;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline625 {
  readonly cause?: Inline625;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline626 {
  readonly cause?: Inline626;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline627 {
  readonly cause?: Inline627;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline628 {
  readonly cause?: Inline628;
  readonly message: string;
  readonly reason: string;
}

export interface Inline629 {
  readonly cause?: Inline629;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline630 {
  readonly cause?: Inline630;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline631 {
  readonly cause?: Inline631;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline632 {
  readonly cause?: Inline632;
  readonly message: string;
  readonly reason: string;
}

export interface Inline633 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline633;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline634 {
  readonly cause?: Inline634;
  readonly message: string;
  readonly reason: string;
}

export interface Inline636 {
  readonly cause?: Inline636;
  readonly message: string;
  readonly reason: string;
}

export interface Inline637 {
  readonly cause?: Inline637;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline638 {
  readonly cause?: Inline638;
  readonly message: string;
  readonly reason: string;
}

export interface Inline639 {
  readonly cause?: Inline639;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline64 {
  readonly suggestedBid: number;
}

export interface Inline640 {
  readonly cause?: Inline640;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline641 {
  readonly cause?: Inline641;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline642 {
  readonly cause?: Inline642;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline643 {
  readonly cause?: Inline643;
  readonly message: string;
  readonly reason: string;
}

export interface Inline644 {
  readonly cause?: Inline644;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline645 {
  readonly cause?: Inline645;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline646 {
  readonly cause?: Inline646;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline647 {
  readonly cause?: Inline647;
  readonly message: string;
  readonly reason: string;
}

export interface Inline648 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline648;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline649 {
  readonly cause?: Inline649;
  readonly message: string;
  readonly reason: string;
}

export interface Inline65 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline651 {
  readonly errorType: string;
  readonly errorValue: Inline651;
}

export interface Inline652 {
  readonly cause?: Inline652;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline653 {
  readonly cause?: Inline653;
  readonly message: string;
  readonly reason: string;
}

export interface Inline654 {
  readonly cause?: Inline654;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline655 {
  readonly cause?: Inline655;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline656 {
  readonly cause?: Inline656;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline657 {
  readonly cause?: Inline657;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline658 {
  readonly cause?: Inline658;
  readonly message: string;
  readonly reason: string;
}

export interface Inline659 {
  readonly cause?: Inline659;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline660 {
  readonly cause?: Inline660;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline661 {
  readonly cause?: Inline661;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline662 {
  readonly cause?: Inline662;
  readonly message: string;
  readonly reason: string;
}

export interface Inline663 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline663;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline664 {
  readonly cause?: Inline664;
  readonly message: string;
  readonly reason: string;
}

export interface Inline669 {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly defaultBid: number;
  readonly extendedData?: Inline669;
  readonly globalAdGroupId?: string;
  readonly name: string;
  readonly state: string;
}

export interface Inline67 {
  readonly suggestedBid: number;
}

export interface Inline674 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline678 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline68 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline683 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline687 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline691 {
  readonly location: string;
  readonly trigger?: string;
}

export interface Inline695 {
  readonly errors?: ReadonlyArray<Inline695>;
  readonly index: number;
}

export interface Inline696 {
  readonly cause?: Inline696;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline697 {
  readonly cause?: Inline697;
  readonly message: string;
  readonly reason: string;
}

export interface Inline698 {
  readonly cause?: Inline698;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline699 {
  readonly cause?: Inline699;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline70 {
  readonly suggestedBid: number;
}

export interface Inline700 {
  readonly cause?: Inline700;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline701 {
  readonly cause?: Inline701;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline702 {
  readonly cause?: Inline702;
  readonly message: string;
  readonly reason: string;
}

export interface Inline703 {
  readonly cause?: Inline703;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline704 {
  readonly cause?: Inline704;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline705 {
  readonly cause?: Inline705;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline706 {
  readonly cause?: Inline706;
  readonly message: string;
  readonly reason: string;
}

export interface Inline707 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline707;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline708 {
  readonly cause?: Inline708;
  readonly message: string;
  readonly reason: string;
}

export interface Inline709 {
  readonly adGroup?: Inline709;
  readonly adGroupId?: string;
  readonly index: number;
}

export interface Inline71 {
  readonly estimatedImpressionLower?: number;
  readonly estimatedImpressionUpper?: number;
}

export interface Inline711 {
  readonly errors?: ReadonlyArray<Inline711>;
  readonly index: number;
}

export interface Inline712 {
  readonly cause?: Inline712;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline713 {
  readonly cause?: Inline713;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline714 {
  readonly cause?: Inline714;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline715 {
  readonly cause?: Inline715;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline716 {
  readonly cause?: Inline716;
  readonly message: string;
  readonly reason: string;
}

export interface Inline717 {
  readonly cause?: Inline717;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline718 {
  readonly cause?: Inline718;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline719 {
  readonly cause?: Inline719;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline72 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline720 {
  readonly cause?: Inline720;
  readonly message: string;
  readonly reason: string;
}

export interface Inline721 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline721;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline722 {
  readonly cause?: Inline722;
  readonly message: string;
  readonly reason: string;
}

export interface Inline723 {
  readonly campaignNegativeKeyword?: Inline723;
  readonly campaignNegativeKeywordId?: string;
  readonly index: number;
}

export interface Inline725 {
  readonly errors?: ReadonlyArray<Inline725>;
  readonly index: number;
}

export interface Inline726 {
  readonly cause?: Inline726;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline727 {
  readonly cause?: Inline727;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline728 {
  readonly cause?: Inline728;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline729 {
  readonly cause?: Inline729;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline730 {
  readonly cause?: Inline730;
  readonly message: string;
  readonly reason: string;
}

export interface Inline731 {
  readonly cause?: Inline731;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline732 {
  readonly cause?: Inline732;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline733 {
  readonly cause?: Inline733;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline734 {
  readonly cause?: Inline734;
  readonly message: string;
  readonly reason: string;
}

export interface Inline735 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline735;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline736 {
  readonly cause?: Inline736;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline737 {
  readonly cause?: Inline737;
  readonly message: string;
  readonly reason: string;
}

export interface Inline738 {
  readonly campaignNegativeTargetingClauseId?: string;
  readonly campaignNegativeTargetingClauses?: Inline738;
  readonly index: number;
}

export interface Inline739 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline739>;
}

export interface Inline740 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline742 {
  readonly errors?: ReadonlyArray<Inline742>;
  readonly index: number;
}

export interface Inline743 {
  readonly cause?: Inline743;
  readonly message: string;
  readonly reason: string;
}

export interface Inline744 {
  readonly cause?: Inline744;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline745 {
  readonly cause?: Inline745;
  readonly message: string;
  readonly reason: string;
}

export interface Inline746 {
  readonly cause?: Inline746;
  readonly message: string;
  readonly reason: string;
}

export interface Inline747 {
  readonly cause?: Inline747;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline748 {
  readonly cause?: Inline748;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline749 {
  readonly cause?: Inline749;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline750 {
  readonly cause?: Inline750;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline751 {
  readonly cause?: Inline751;
  readonly message: string;
  readonly reason: string;
}

export interface Inline752 {
  readonly cause?: Inline752;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline753 {
  readonly cause?: Inline753;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline754 {
  readonly cause?: Inline754;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline755 {
  readonly cause?: Inline755;
  readonly message: string;
  readonly reason: string;
}

export interface Inline756 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline756;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline757 {
  readonly cause?: Inline757;
  readonly message: string;
  readonly reason: string;
}

export interface Inline758 {
  readonly campaign?: Inline758;
  readonly campaignId?: string;
  readonly index: number;
}

export interface Inline759 {
  readonly placementBidding?: ReadonlyArray<Inline759>;
  readonly shopperCohortBidding?: ReadonlyArray<Inline760>;
  readonly strategy: string;
}

export interface Inline760 {
  readonly audienceSegments?: ReadonlyArray<Inline760>;
  readonly percentage?: number;
  readonly shopperCohortType: string;
}

export interface Inline761 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline761>;
}

export interface Inline762 {
  readonly offAmazonBudgetControlStrategy?: string;
}

export interface Inline763 {

}

export interface Inline765 {
  readonly errors?: ReadonlyArray<Inline765>;
  readonly index: number;
}

export interface Inline766 {
  readonly cause?: Inline766;
  readonly message: string;
  readonly reason: string;
}

export interface Inline767 {
  readonly cause?: Inline767;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline768 {
  readonly cause?: Inline768;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline769 {
  readonly cause?: Inline769;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline770 {
  readonly cause?: Inline770;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline771 {
  readonly cause?: Inline771;
  readonly message: string;
  readonly reason: string;
}

export interface Inline772 {
  readonly cause?: Inline772;
  readonly message: string;
  readonly reason: string;
}

export interface Inline773 {
  readonly cause?: Inline773;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline774 {
  readonly cause?: Inline774;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline775 {
  readonly cause?: Inline775;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline776 {
  readonly cause?: Inline776;
  readonly message: string;
  readonly reason: string;
}

export interface Inline777 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline777;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline778 {
  readonly cause?: Inline778;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline779 {
  readonly cause?: Inline779;
  readonly message: string;
  readonly reason: string;
}

export interface Inline780 {
  readonly index: number;
  readonly keyword?: Inline780;
  readonly keywordId?: string;
}

export interface Inline782 {
  readonly errors?: ReadonlyArray<Inline782>;
  readonly index: number;
}

export interface Inline783 {
  readonly cause?: Inline783;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline784 {
  readonly cause?: Inline784;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline785 {
  readonly cause?: Inline785;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline786 {
  readonly cause?: Inline786;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline787 {
  readonly cause?: Inline787;
  readonly message: string;
  readonly reason: string;
}

export interface Inline788 {
  readonly cause?: Inline788;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline789 {
  readonly cause?: Inline789;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline79 {
  readonly id?: string;
  readonly name?: string;
}

export interface Inline790 {
  readonly cause?: Inline790;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline791 {
  readonly cause?: Inline791;
  readonly message: string;
  readonly reason: string;
}

export interface Inline792 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline792;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline793 {
  readonly cause?: Inline793;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline794 {
  readonly cause?: Inline794;
  readonly message: string;
  readonly reason: string;
}

export interface Inline795 {
  readonly index: number;
  readonly negativeKeyword?: Inline795;
  readonly negativeKeywordId?: string;
}

export interface Inline797 {
  readonly errors?: ReadonlyArray<Inline797>;
  readonly index: number;
}

export interface Inline798 {
  readonly cause?: Inline798;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline799 {
  readonly cause?: Inline799;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline8 {
  readonly type: string;
  readonly value?: string;
}

export interface Inline800 {
  readonly cause?: Inline800;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline801 {
  readonly cause?: Inline801;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline802 {
  readonly cause?: Inline802;
  readonly message: string;
  readonly reason: string;
}

export interface Inline803 {
  readonly cause?: Inline803;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline804 {
  readonly cause?: Inline804;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline805 {
  readonly cause?: Inline805;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline806 {
  readonly cause?: Inline806;
  readonly message: string;
  readonly reason: string;
}

export interface Inline807 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline807;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline808 {
  readonly cause?: Inline808;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline809 {
  readonly cause?: Inline809;
  readonly message: string;
  readonly reason: string;
}

export interface Inline81 {
  readonly id?: string;
  readonly name?: string;
}

export interface Inline810 {
  readonly index: number;
  readonly negativeTargetingClause?: Inline810;
  readonly targetId?: string;
}

export interface Inline811 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline811>;
}

export interface Inline812 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline814 {
  readonly errors?: ReadonlyArray<Inline814>;
  readonly index: number;
}

export interface Inline815 {
  readonly cause?: Inline815;
  readonly message: string;
  readonly reason: string;
}

export interface Inline816 {
  readonly cause?: Inline816;
  readonly message: string;
  readonly reason: string;
}

export interface Inline817 {
  readonly cause?: Inline817;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline818 {
  readonly cause?: Inline818;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline819 {
  readonly cause?: Inline819;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline820 {
  readonly cause?: Inline820;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline821 {
  readonly cause?: Inline821;
  readonly message: string;
  readonly reason: string;
}

export interface Inline822 {
  readonly cause?: Inline822;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline823 {
  readonly cause?: Inline823;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline824 {
  readonly cause?: Inline824;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline825 {
  readonly cause?: Inline825;
  readonly message: string;
  readonly reason: string;
}

export interface Inline826 {
  readonly cause?: Inline826;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline827 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline827;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline828 {
  readonly cause?: Inline828;
  readonly message: string;
  readonly reason: string;
}

export interface Inline829 {
  readonly cause?: Inline829;
  readonly message: string;
  readonly reason: string;
}

export interface Inline830 {
  readonly adId?: string;
  readonly index: number;
  readonly productAd?: Inline830;
}

export interface Inline831 {
  readonly catalogSourceCountryCode?: string;
}

export interface Inline833 {
  readonly errors?: ReadonlyArray<Inline833>;
  readonly index: number;
}

export interface Inline834 {
  readonly cause?: Inline834;
  readonly message: string;
  readonly reason: string;
}

export interface Inline835 {
  readonly cause?: Inline835;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline836 {
  readonly cause?: Inline836;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline837 {
  readonly cause?: Inline837;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline838 {
  readonly cause?: Inline838;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline839 {
  readonly cause?: Inline839;
  readonly message: string;
  readonly reason: string;
}

export interface Inline840 {
  readonly cause?: Inline840;
  readonly message: string;
  readonly reason: string;
}

export interface Inline841 {
  readonly cause?: Inline841;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline842 {
  readonly cause?: Inline842;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline843 {
  readonly cause?: Inline843;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline844 {
  readonly cause?: Inline844;
  readonly message: string;
  readonly reason: string;
}

export interface Inline845 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline845;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline846 {
  readonly cause?: Inline846;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline847 {
  readonly cause?: Inline847;
  readonly message: string;
  readonly reason: string;
}

export interface Inline848 {
  readonly index: number;
  readonly targetId?: string;
  readonly targetingClause?: Inline848;
}

export interface Inline849 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline849>;
}

export interface Inline850 {
  readonly type?: string;
  readonly value?: string;
}

export interface Inline852 {
  readonly budget: number;
  readonly budgetType: string;
  readonly effectiveBudget?: number;
}

export interface Inline853 {
  readonly placementBidding?: ReadonlyArray<Inline853>;
  readonly shopperCohortBidding?: ReadonlyArray<Inline854>;
  readonly strategy: string;
}

export interface Inline854 {
  readonly audienceSegments?: ReadonlyArray<Inline854>;
  readonly percentage?: number;
  readonly shopperCohortType: string;
}

export interface Inline855 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline855>;
}

export interface Inline856 {
  readonly offAmazonBudgetControlStrategy?: string;
}

export interface Inline857 {

}

export interface Inline859 {
  readonly dateError?: Inline859;
  readonly entityNotFoundError?: Inline860;
  readonly internalServerError?: Inline861;
  readonly invalidInputError?: Inline862;
  readonly malformedValueError?: Inline863;
  readonly missingValueError?: Inline864;
  readonly otherError?: Inline865;
  readonly rangeError?: Inline866;
  readonly throttledError?: Inline867;
}

export interface Inline86 {
  readonly code?: string;
  readonly details?: string;
}

export interface Inline860 {
  readonly cause?: Inline860;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline861 {
  readonly cause?: Inline861;
  readonly message: string;
  readonly reason: string;
}

export interface Inline862 {
  readonly cause?: Inline862;
  readonly message: string;
  readonly reason: string;
}

export interface Inline863 {
  readonly cause?: Inline863;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline864 {
  readonly cause?: Inline864;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline865 {
  readonly cause?: Inline865;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline866 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline866;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline867 {
  readonly cause?: Inline867;
  readonly message: string;
  readonly reason: string;
}

export interface Inline869 {
  readonly cause?: Inline869;
  readonly message: string;
  readonly reason: string;
}

export interface Inline870 {
  readonly cause?: Inline870;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline871 {
  readonly cause?: Inline871;
  readonly message: string;
  readonly reason: string;
}

export interface Inline872 {
  readonly cause?: Inline872;
  readonly message: string;
  readonly reason: string;
}

export interface Inline873 {
  readonly cause?: Inline873;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline874 {
  readonly cause?: Inline874;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline875 {
  readonly cause?: Inline875;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline876 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline876;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline877 {
  readonly cause?: Inline877;
  readonly message: string;
  readonly reason: string;
}

export interface Inline879 {
  readonly errorType: string;
  readonly errorValue: Inline879;
}

export interface Inline88 {
  readonly ruleId?: string;
  readonly ruleName?: string;
  readonly suggestedBudgetIncreasePercent?: number;
}

export interface Inline880 {
  readonly cause?: Inline880;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline881 {
  readonly cause?: Inline881;
  readonly message: string;
  readonly reason: string;
}

export interface Inline882 {
  readonly cause?: Inline882;
  readonly message: string;
  readonly reason: string;
}

export interface Inline883 {
  readonly cause?: Inline883;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline884 {
  readonly cause?: Inline884;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline885 {
  readonly cause?: Inline885;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline886 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline886;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline887 {
  readonly cause?: Inline887;
  readonly message: string;
  readonly reason: string;
}

export interface Inline889 {
  readonly helpUrl?: string;
  readonly message?: string;
  readonly name?: string;
}

export interface Inline89 {
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

export interface Inline891 {
  readonly biddingError?: Inline891;
  readonly billingError?: Inline892;
  readonly budgetError?: Inline893;
  readonly currencyError?: Inline894;
  readonly dateError?: Inline895;
  readonly duplicateValueError?: Inline896;
  readonly entityNotFoundError?: Inline897;
  readonly entityQuotaError?: Inline898;
  readonly entityStateError?: Inline899;
  readonly internalServerError?: Inline900;
  readonly malformedValueError?: Inline901;
  readonly missingValueError?: Inline902;
  readonly otherError?: Inline903;
  readonly parentEntityError?: Inline904;
  readonly rangeError?: Inline905;
  readonly throttledError?: Inline906;
}

export interface Inline892 {
  readonly cause?: Inline892;
  readonly message: string;
  readonly reason: string;
}

export interface Inline893 {
  readonly cause?: Inline893;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline894 {
  readonly cause?: Inline894;
  readonly message: string;
  readonly reason: string;
}

export interface Inline895 {
  readonly cause?: Inline895;
  readonly message: string;
  readonly reason: string;
}

export interface Inline896 {
  readonly cause?: Inline896;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline897 {
  readonly cause?: Inline897;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline898 {
  readonly cause?: Inline898;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline899 {
  readonly cause?: Inline899;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline900 {
  readonly cause?: Inline900;
  readonly message: string;
  readonly reason: string;
}

export interface Inline901 {
  readonly cause?: Inline901;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline902 {
  readonly cause?: Inline902;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline903 {
  readonly cause?: Inline903;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline904 {
  readonly cause?: Inline904;
  readonly message: string;
  readonly reason: string;
}

export interface Inline905 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline905;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline906 {
  readonly cause?: Inline906;
  readonly message: string;
  readonly reason: string;
}

export interface Inline908 {
  readonly cause?: Inline908;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline909 {
  readonly cause?: Inline909;
  readonly message: string;
  readonly reason: string;
}

export interface Inline910 {
  readonly cause?: Inline910;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline911 {
  readonly cause?: Inline911;
  readonly message: string;
  readonly reason: string;
}

export interface Inline912 {
  readonly cause?: Inline912;
  readonly message: string;
  readonly reason: string;
}

export interface Inline913 {
  readonly cause?: Inline913;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline914 {
  readonly cause?: Inline914;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline915 {
  readonly cause?: Inline915;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline916 {
  readonly cause?: Inline916;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline917 {
  readonly cause?: Inline917;
  readonly message: string;
  readonly reason: string;
}

export interface Inline918 {
  readonly cause?: Inline918;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline919 {
  readonly cause?: Inline919;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline920 {
  readonly cause?: Inline920;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline921 {
  readonly cause?: Inline921;
  readonly message: string;
  readonly reason: string;
}

export interface Inline922 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline922;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline923 {
  readonly cause?: Inline923;
  readonly message: string;
  readonly reason: string;
}

export interface Inline925 {
  readonly errorType: string;
  readonly errorValue: Inline925;
}

export interface Inline926 {
  readonly cause?: Inline926;
  readonly message: string;
  readonly reason: string;
}

export interface Inline927 {
  readonly cause?: Inline927;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline928 {
  readonly cause?: Inline928;
  readonly message: string;
  readonly reason: string;
}

export interface Inline929 {
  readonly cause?: Inline929;
  readonly message: string;
  readonly reason: string;
}

export interface Inline930 {
  readonly cause?: Inline930;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline931 {
  readonly cause?: Inline931;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline932 {
  readonly cause?: Inline932;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline933 {
  readonly cause?: Inline933;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline934 {
  readonly cause?: Inline934;
  readonly message: string;
  readonly reason: string;
}

export interface Inline935 {
  readonly cause?: Inline935;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline936 {
  readonly cause?: Inline936;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline937 {
  readonly cause?: Inline937;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline938 {
  readonly cause?: Inline938;
  readonly message: string;
  readonly reason: string;
}

export interface Inline939 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline939;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline94 {
  readonly Error: Inline94;
  readonly campaignId: string;
  readonly index: number;
}

export interface Inline940 {
  readonly cause?: Inline940;
  readonly message: string;
  readonly reason: string;
}

export interface Inline942 {
  readonly errorType: string;
  readonly errorValue: Inline942;
}

export interface Inline943 {
  readonly cause?: Inline943;
  readonly message: string;
  readonly reason: string;
}

export interface Inline944 {
  readonly cause?: Inline944;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline945 {
  readonly cause?: Inline945;
  readonly message: string;
  readonly reason: string;
}

export interface Inline946 {
  readonly cause?: Inline946;
  readonly message: string;
  readonly reason: string;
}

export interface Inline947 {
  readonly cause?: Inline947;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline948 {
  readonly cause?: Inline948;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline949 {
  readonly cause?: Inline949;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export interface Inline95 {
  readonly budgetRuleRecommendation: Inline95;
  readonly campaignId: string;
  readonly index: number;
  readonly sevenDaysMissedOpportunities: Inline96;
  readonly suggestedBudget: number;
}

export interface Inline950 {
  readonly cause?: Inline950;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline951 {
  readonly cause?: Inline951;
  readonly message: string;
  readonly reason: string;
}

export interface Inline952 {
  readonly cause?: Inline952;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline953 {
  readonly cause?: Inline953;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline954 {
  readonly cause?: Inline954;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline955 {
  readonly cause?: Inline955;
  readonly message: string;
  readonly reason: string;
}

export interface Inline956 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline956;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline957 {
  readonly cause?: Inline957;
  readonly message: string;
  readonly reason: string;
}

export interface Inline959 {
  readonly autoManageCampaign?: boolean;
  readonly budget: Inline959;
  readonly campaignId: string;
  readonly dynamicBidding?: Inline960;
  readonly endDate?: string;
  readonly extendedData?: Inline962;
  readonly globalCampaignId?: string;
  readonly marketplaceBudgetAllocation?: string;
  readonly name: string;
  readonly offAmazonSettings?: Inline963;
  readonly portfolioId?: string;
  readonly siteRestrictions?: ReadonlyArray<string>;
  readonly startDate: string;
  readonly state: string;
  readonly tags?: Inline964;
  readonly targetingType: string;
}

export interface Inline96 {
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

export interface Inline960 {
  readonly placementBidding?: ReadonlyArray<Inline960>;
  readonly shopperCohortBidding?: ReadonlyArray<Inline961>;
  readonly strategy: string;
}

export interface Inline961 {
  readonly audienceSegments?: ReadonlyArray<Inline961>;
  readonly percentage?: number;
  readonly shopperCohortType: string;
}

export interface Inline962 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline962>;
}

export interface Inline963 {
  readonly offAmazonBudgetControlStrategy?: string;
}

export interface Inline964 {

}

export interface Inline966 {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline966>;
}

export interface Inline968 {
  readonly entityNotFoundError?: Inline968;
  readonly internalServerError?: Inline969;
  readonly invalidInputError?: Inline970;
  readonly malformedValueError?: Inline971;
  readonly missingValueError?: Inline972;
  readonly otherError?: Inline973;
  readonly rangeError?: Inline974;
  readonly throttledError?: Inline975;
}

export interface Inline969 {
  readonly cause?: Inline969;
  readonly message: string;
  readonly reason: string;
}

export interface Inline970 {
  readonly cause?: Inline970;
  readonly message: string;
  readonly reason: string;
}

export interface Inline971 {
  readonly cause?: Inline971;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline972 {
  readonly cause?: Inline972;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline973 {
  readonly cause?: Inline973;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline974 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline974;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline975 {
  readonly cause?: Inline975;
  readonly message: string;
  readonly reason: string;
}

export interface Inline977 {
  readonly cause?: Inline977;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline978 {
  readonly cause?: Inline978;
  readonly message: string;
  readonly reason: string;
}

export interface Inline979 {
  readonly cause?: Inline979;
  readonly message: string;
  readonly reason: string;
}

export interface Inline980 {
  readonly cause?: Inline980;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline981 {
  readonly cause?: Inline981;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline982 {
  readonly cause?: Inline982;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline983 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline983;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline984 {
  readonly cause?: Inline984;
  readonly message: string;
  readonly reason: string;
}

export interface Inline986 {
  readonly errorType: string;
  readonly errorValue: Inline986;
}

export interface Inline987 {
  readonly cause?: Inline987;
  readonly message: string;
  readonly reason: string;
}

export interface Inline988 {
  readonly cause?: Inline988;
  readonly message: string;
  readonly reason: string;
}

export interface Inline989 {
  readonly cause?: Inline989;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline990 {
  readonly cause?: Inline990;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline991 {
  readonly cause?: Inline991;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline992 {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline992;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface Inline993 {
  readonly cause?: Inline993;
  readonly message: string;
  readonly reason: string;
}

export interface Inline995 {
  readonly helpUrl?: string;
  readonly message?: string;
  readonly name?: string;
}

export interface Inline997 {
  readonly errorType: string;
  readonly errorValue: Inline997;
}

export interface Inline998 {
  readonly cause?: Inline998;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export interface Inline999 {
  readonly cause?: Inline999;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export interface IntegerRange {
  readonly max?: number;
  readonly min?: number;
}

export interface InternalServerException {
  readonly code?: string;
  readonly details?: string;
}

export interface KeywordBidInfo {
  readonly bid?: number;
  readonly matchType?: string;
  readonly rank?: number;
  readonly suggestedBid?: Inline234;
}

export interface KeywordGroup {
  readonly description?: string;
  readonly id: string;
  readonly impactSummary?: string;
  readonly sampleKeywords?: ReadonlyArray<string>;
  readonly text: string;
}

export interface KeywordGroupsRecommendationsRequest {
  readonly asins: ReadonlyArray<string>;
  readonly countryCode?: string;
  readonly nextToken?: string;
}

export interface KeywordGroupsRecommendationsResponse {
  readonly countryCode?: string;
  readonly keywordGroups: ReadonlyArray<Inline238>;
  readonly nextToken?: string;
}

export interface KeywordTarget {
  readonly bid?: number;
  readonly keyword?: string;
  readonly matchType?: string;
  readonly userSelectedKeyword?: boolean;
}

export interface KeywordTargetingRecommendation {
  readonly action?: string;
  readonly adGroupId?: string;
  readonly keywordId?: string;
  readonly keywordText?: string;
  readonly matchType?: string;
  readonly suggestedBid?: number;
}

export interface KeywordTargetRankRecommendationRequest {
  readonly targets?: ReadonlyArray<Inline242>;
  readonly locale?: string;
  readonly maxRecommendations?: number;
  readonly sortDimension?: string;
}

export interface KeywordTargetResponse {
  readonly rank?: number;
  readonly suggestedBid?: Inline244;
  readonly translation?: string;
  readonly bid?: number;
  readonly keyword?: string;
  readonly matchType?: string;
  readonly userSelectedKeyword?: boolean;
}

export interface ListAssociatedBudgetRulesForSPCampaignsParams {
  readonly campaignId: number;
}

export interface ListAssociatedBudgetRulesForSPCampaignsResponse {
  readonly data: Inline2809;
}

export interface ListSponsoredProductsAdGroupsParams {
  readonly adGroupIdFilter?: Inline2676;
  readonly campaignIdFilter?: Inline2677;
  readonly campaignTargetingTypeFilter?: string;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly nameFilter?: Inline2678;
  readonly nextToken?: string;
  readonly stateFilter?: Inline2679;
}

export interface ListSponsoredProductsAdGroupsResponse {
  readonly data: Inline2681;
}

export interface ListSponsoredProductsCampaignNegativeKeywordsParams {
  readonly campaignIdFilter?: Inline2748;
  readonly campaignNegativeKeywordIdFilter?: Inline2749;
  readonly campaignNegativeKeywordTextFilter?: Inline2750;
  readonly includeExtendedDataFields?: boolean;
  readonly matchTypeFilter?: ReadonlyArray<string>;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly stateFilter?: Inline2751;
}

export interface ListSponsoredProductsCampaignNegativeKeywordsResponse {
  readonly data: Inline2753;
}

export interface ListSponsoredProductsCampaignNegativeTargetingClausesParams {
  readonly asinFilter?: Inline2771;
  readonly campaignIdFilter?: Inline2772;
  readonly campaignNegativeTargetIdFilter?: Inline2773;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly stateFilter?: Inline2774;
}

export interface ListSponsoredProductsCampaignNegativeTargetingClausesResponse {
  readonly data: Inline2776;
}

export interface ListSponsoredProductsCampaignsParams {
  readonly campaignIdFilter?: Inline2849;
  readonly includeExtendedDataFields?: boolean;
  readonly marketplaceBudgetAllocationFilter?: Inline2850;
  readonly maxResults?: number;
  readonly nameFilter?: Inline2851;
  readonly nextToken?: string;
  readonly portfolioIdFilter?: Inline2852;
  readonly stateFilter?: Inline2853;
}

export interface ListSponsoredProductsCampaignsResponse {
  readonly data: Inline2855;
}

export interface ListSponsoredProductsKeywordsParams {
  readonly adGroupIdFilter?: Inline2894;
  readonly campaignIdFilter?: Inline2895;
  readonly includeExtendedDataFields?: boolean;
  readonly keywordIdFilter?: Inline2896;
  readonly keywordTextFilter?: Inline2897;
  readonly locale?: string;
  readonly matchTypeFilter?: ReadonlyArray<string>;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly stateFilter?: Inline2898;
}

export interface ListSponsoredProductsKeywordsResponse {
  readonly data: Inline2900;
}

export interface ListSponsoredProductsNegativeKeywordsParams {
  readonly adGroupIdFilter?: Inline2919;
  readonly campaignIdFilter?: Inline2920;
  readonly includeExtendedDataFields?: boolean;
  readonly locale?: string;
  readonly matchTypeFilter?: ReadonlyArray<string>;
  readonly maxResults?: number;
  readonly negativeKeywordIdFilter?: Inline2921;
  readonly negativeKeywordTextFilter?: Inline2922;
  readonly nextToken?: string;
  readonly stateFilter?: Inline2923;
}

export interface ListSponsoredProductsNegativeKeywordsResponse {
  readonly data: Inline2925;
}

export interface ListSponsoredProductsNegativeTargetingClausesParams {
  readonly adGroupIdFilter?: Inline2950;
  readonly asinFilter?: Inline2951;
  readonly campaignIdFilter?: Inline2952;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly negativeTargetIdFilter?: Inline2953;
  readonly nextToken?: string;
  readonly stateFilter?: Inline2954;
}

export interface ListSponsoredProductsNegativeTargetingClausesResponse {
  readonly data: Inline2956;
}

export interface ListSponsoredProductsProductAdsParams {
  readonly adGroupIdFilter?: Inline2977;
  readonly adIdFilter?: Inline2978;
  readonly campaignIdFilter?: Inline2979;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly stateFilter?: Inline2980;
}

export interface ListSponsoredProductsProductAdsResponse {
  readonly data: Inline2982;
}

export interface ListSponsoredProductsTargetingClausesParams {
  readonly adGroupIdFilter?: Inline3130;
  readonly asinFilter?: Inline3131;
  readonly campaignIdFilter?: Inline3132;
  readonly expressionTypeFilter?: Inline3133;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly stateFilter?: Inline3134;
  readonly targetIdFilter?: Inline3135;
}

export interface ListSponsoredProductsTargetingClausesResponse {
  readonly data: Inline3137;
}

export interface ListTargetPromotionGroupsParams {
  readonly adGroupIdFilter?: Inline3066;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly targetPromotionGroupIdFilter?: Inline3067;
}

export interface ListTargetPromotionGroupsResponse {
  readonly data: Inline3069;
}

export interface ListTargetPromotionGroupTargetsParams {
  readonly adGroupIdFilter?: Inline3086;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly targetPromotionGroupIdFilter?: Inline3087;
}

export interface ListTargetPromotionGroupTargetsResponse {
  readonly data: Inline3089;
}

export interface MultiCountryAdGroupThemeBasedBidRecommendationRequest {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly countryCodes?: ReadonlyArray<string>;
  readonly includeAnalysis?: boolean;
  readonly recommendationType: string;
  readonly targetingExpressions: ReadonlyArray<Inline246>;
}

export interface MultiCountryAsinsThemeBasedBidRecommendationRequest {
  readonly bidding: Inline248;
  readonly countryCodes: ReadonlyArray<string>;
  readonly includeAnalysis?: boolean;
  readonly products?: ReadonlyArray<Inline249>;
  readonly recommendationType: string;
  readonly targetingExpressions: ReadonlyArray<Inline250>;
}

export interface MultiCountryBidAnalysesPerTargetingExpression {
  readonly countryBidAnalyses?: unknown;
  readonly expression: Inline252;
}

export interface MultiCountryBidRecommendationError {
  readonly code?: string;
  readonly countryCodes?: ReadonlyArray<string>;
  readonly message?: string;
}

export interface MultiCountryBidRecommendationPerTargetingExpression {
  readonly countrySuggestedBids: unknown;
  readonly expression: Inline255;
}

export interface MultiCountryProduct {

}

export interface MultiCountryTargetingExpression {
  readonly countryValues?: unknown;
  readonly type: string;
}

export type MultiCountryTargetingExpressionList = ReadonlyArray<Inline259>;

export type MultiCountryTargetingExpressionType = "CLOSE_MATCH" | "COMPLEMENTS" | "KEYWORD_BROAD_MATCH" | "KEYWORD_EXACT_MATCH" | "KEYWORD_GROUP" | "KEYWORD_PHRASE_MATCH" | "LOOSE_MATCH" | "PAT_ASIN" | "PAT_CATEGORY" | "PAT_CATEGORY_REFINEMENT" | "SUBSTITUTES" | string;

export interface MultiCountryThemeBasedBidRecommendation {
  readonly bidAnalysesForTargetingExpressions?: ReadonlyArray<Inline262>;
  readonly bidRecommendationsForTargetingExpressions: ReadonlyArray<Inline263>;
  readonly theme: string;
}

export interface MultiCountryThemeBasedBidRecommendationCompleteFailureResponse {
  readonly errors: ReadonlyArray<Inline265>;
}

export interface MultiCountryThemeBasedBidRecommendationResponse {
  readonly bidRecommendations: ReadonlyArray<Inline267>;
  readonly errors?: ReadonlyArray<Inline269>;
}

export interface OptimizationRulesAPISwaggerActionDetails {
  readonly actionOperator: string;
  readonly actionUnit: string;
  readonly value: number;
}

export type OptimizationRulesAPISwaggerActionType = "ADOPT" | string;

export interface OptimizationRulesAPISwaggerAssociateOptimizationRulesToCampaignRequest {
  readonly optimizationRuleIds: ReadonlyArray<string>;
}

export interface OptimizationRulesAPISwaggerAssociateOptimizationRulesToCampaignResponse {
  readonly code?: string;
  readonly responses?: ReadonlyArray<Inline274>;
}

export interface OptimizationRulesAPISwaggerCampaignFilter {
  readonly campaignId?: Inline276;
}

export type OptimizationRulesAPISwaggerComparisonOperator = "EQUAL_TO" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | string;

export interface OptimizationRulesAPISwaggerCreateOptimizationRulesRequest {
  readonly optimizationRules: ReadonlyArray<Inline279>;
}

export interface OptimizationRulesAPISwaggerCreateOptimizationRulesRequestV2 {
  readonly optimizationRules: ReadonlyArray<Inline285>;
}

export interface OptimizationRulesAPISwaggerCreateOptimizationRulesResponseV2 {
  readonly code?: string;
  readonly responses?: ReadonlyArray<Inline292>;
}

export type OptimizationRulesAPISwaggerDayOfTheWeek = "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY" | string;

export interface OptimizationRulesAPISwaggerDuration {
  readonly endTime?: string;
  readonly eventId?: string;
  readonly eventName?: string;
  readonly startTime?: string;
}

export interface OptimizationRulesAPISwaggerEntityFieldFilter {
  readonly filterType?: string;
  readonly values?: ReadonlyArray<string>;
}

export type OptimizationRulesAPISwaggerExpressionType = "BROAD" | "EXACT" | "EXPANDED" | "PHRASE" | string;

export type OptimizationRulesAPISwaggerFilterType = "BROAD_MATCH" | "EXACT_MATCH" | string;

export interface OptimizationRulesAPISwaggerOptimizationRule {
  readonly action?: Inline304;
  readonly conditions?: ReadonlyArray<Inline305>;
  readonly recurrence?: Inline307;
  readonly ruleCategory?: string;
  readonly ruleName?: string;
  readonly ruleSubCategory?: string;
  readonly status?: string;
  readonly optimizationRuleId?: string;
}

export interface OptimizationRulesAPISwaggerOptimizationRuleFilter {
  readonly optimizationRuleId?: Inline310;
  readonly ruleCategory?: Inline311;
  readonly ruleSubCategory?: Inline312;
}

export interface OptimizationRulesAPISwaggerOptimizationRuleFilterV2 {
  readonly optimizationRuleId?: Inline314;
  readonly ruleCategory?: Inline315;
  readonly ruleName?: Inline316;
  readonly ruleStatus?: Inline317;
  readonly ruleSubCategory?: Inline318;
}

export interface OptimizationRulesAPISwaggerOptimizationRulesError {
  readonly code?: string;
  readonly message?: string;
}

export interface OptimizationRulesAPISwaggerOptimizationRulesResponse {
  readonly code?: string;
  readonly responses?: ReadonlyArray<Inline321>;
}

export interface OptimizationRulesAPISwaggerOptimizationRulesResponseV2 {
  readonly code?: string;
  readonly responses?: ReadonlyArray<Inline327>;
}

export interface OptimizationRulesAPISwaggerOptimizationRuleV2 {
  readonly action?: Inline334;
  readonly conditions?: ReadonlyArray<Inline335>;
  readonly recurrence?: Inline337;
  readonly ruleCategory?: string;
  readonly ruleName?: string;
  readonly ruleSubCategory?: string;
  readonly status?: string;
  readonly targeting?: ReadonlyArray<Inline339>;
  readonly optimizationRuleId?: string;
}

export interface OptimizationRulesAPISwaggerOptimizationRuleWithoutRuleId {
  readonly action: Inline341;
  readonly conditions?: ReadonlyArray<Inline342>;
  readonly recurrence: Inline344;
  readonly ruleCategory: string;
  readonly ruleName?: string;
  readonly ruleSubCategory: string;
  readonly status?: string;
}

export interface OptimizationRulesAPISwaggerOptimizationRuleWithoutRuleIdV2 {
  readonly action?: Inline347;
  readonly conditions?: ReadonlyArray<Inline348>;
  readonly recurrence?: Inline350;
  readonly ruleCategory: string;
  readonly ruleName: string;
  readonly ruleSubCategory: string;
  readonly status: string;
  readonly targeting?: ReadonlyArray<Inline352>;
}

export interface OptimizationRulesAPISwaggerRangeTypeRuleCriteria {
  readonly maxValue: number;
  readonly minValue: number;
}

export interface OptimizationRulesAPISwaggerRuleAction {
  readonly actionDetails: Inline355;
  readonly actionType: string;
}

export type OptimizationRulesAPISwaggerRuleActionOperator = "INCREMENT" | string;

export type OptimizationRulesAPISwaggerRuleAttribute = "ROAS" | string;

export type OptimizationRulesAPISwaggerRuleAttributeV2 = "ACOS" | "CLICKS" | "CPC" | "CTR" | "CVR" | "IMPRESSIONS" | "ORDERS" | "ROAS" | "SALES" | "SPEND" | string;

export type OptimizationRulesAPISwaggerRuleCategory = "BID" | string;

export type OptimizationRulesAPISwaggerRuleCategoryV2 = "BID" | "BUDGET" | "TARGETING" | string;

export interface OptimizationRulesAPISwaggerRuleCondition {
  readonly attributeName?: string;
  readonly criteria?: Inline362 | Inline363;
}

export interface OptimizationRulesAPISwaggerRuleConditionV2 {
  readonly attributeName?: string;
  readonly criteria?: Inline365 | Inline366;
}

export type OptimizationRulesAPISwaggerRuleCriteria = Inline368 | Inline369;

export interface OptimizationRulesAPISwaggerRuleRecurrence {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly duration: Inline371;
  readonly timesOfDay?: ReadonlyArray<Inline372>;
  readonly type: string;
}

export type OptimizationRulesAPISwaggerRuleRecurrenceType = "DAILY" | "WEEKLY" | string;

export type OptimizationRulesAPISwaggerRuleStatus = "ENABLED" | "ENDED" | "PAUSED" | "SCHEDULED" | string;

export type OptimizationRulesAPISwaggerRuleSubCategory = "SCHEDULE" | string;

export type OptimizationRulesAPISwaggerRuleSubCategoryV2 = "PERFORMANCE" | "SCHEDULE" | string;

export interface OptimizationRulesAPISwaggerRuleTargeting {
  readonly expressionTypes: ReadonlyArray<string>;
  readonly lookbackDays: number;
  readonly targetingType: string;
}

export interface OptimizationRulesAPISwaggerSearchOptimizationRulesRequest {
  readonly campaignFilter?: Inline379;
  readonly nextToken?: string;
  readonly optimizationRuleFilter?: Inline380;
  readonly pageSize?: number;
}

export interface OptimizationRulesAPISwaggerSearchOptimizationRulesRequestV2 {
  readonly campaignFilter?: Inline384;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly optimizationRuleFilter?: Inline385;
  readonly sortBy?: ReadonlyArray<string>;
}

export interface OptimizationRulesAPISwaggerSearchOptimizationRulesResponse {
  readonly code?: string;
  readonly nextToken?: string;
  readonly optimizationRules?: ReadonlyArray<Inline391>;
}

export interface OptimizationRulesAPISwaggerSearchOptimizationRulesResponseV2 {
  readonly code?: string;
  readonly nextToken?: string;
  readonly optimizationRules?: ReadonlyArray<Inline397>;
}

export interface OptimizationRulesAPISwaggerSingleOptimizationRuleAssociationResponse {
  readonly code?: string;
  readonly details?: string;
  readonly optimizationRuleId?: string;
}

export interface OptimizationRulesAPISwaggerSingleOptimizationRuleResponse {
  readonly code?: string;
  readonly details?: string;
  readonly optimizationRule?: Inline405;
}

export interface OptimizationRulesAPISwaggerSingleOptimizationRuleResponseV2 {
  readonly code?: string;
  readonly details?: string;
  readonly optimizationRule?: Inline411;
}

export type OptimizationRulesAPISwaggerSortableField = "NAME" | string;

export type OptimizationRulesAPISwaggerTargetingType = "KEYWORD" | "PRODUCT" | string;

export interface OptimizationRulesAPISwaggerUpdateOptimizationRulesRequest {
  readonly optimizationRules: ReadonlyArray<Inline420>;
}

export interface OptimizationRulesAPISwaggerUpdateOptimizationRulesRequestV2 {
  readonly optimizationRules: ReadonlyArray<Inline426>;
}

export interface OptimizationRulesAPISwaggerUpdateOptimizationRulesResponseV2 {
  readonly code?: string;
  readonly responses?: ReadonlyArray<Inline433>;
}

export interface OptimizationRulesAPISwaggerValueTypeRuleCriteria {
  readonly comparisonOperator: string;
  readonly value: number;
}

export interface PerformanceMeasureCondition {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export type PerformanceMetric = "ACOS" | "CTR" | "CVR" | "ROAS" | string;

export interface PlacementAdjustment {
  readonly percentage?: number;
  readonly predicate?: string;
}

export interface PlacementBiddingRecommendation {
  readonly action?: string;
  readonly incrementalImpressionsLowerPercent?: number;
  readonly incrementalImpressionsUpperPercent?: number;
  readonly placementType?: string;
  readonly suggestedBidAdjustment?: number;
}

export interface PriceRange {
  readonly max?: number;
  readonly min?: number;
}

export interface ProductDetails {
  readonly asin?: string;
  readonly globalStoreSetting?: Inline446;
}

export type ProductDetailsList = ReadonlyArray<Inline448>;

export interface ProductRecommendation {
  readonly recommendedAsin?: string;
  readonly themes?: ReadonlyArray<string>;
}

export interface ProductRecommendationsByASIN {
  readonly nextCursor?: string;
  readonly previousCursor?: string;
  readonly recommendations?: ReadonlyArray<Inline451>;
}

export interface ProductRecommendationsByTheme {
  readonly nextCursor?: string;
  readonly previousCursor?: string;
  readonly recommendations?: ReadonlyArray<Inline453>;
}

export interface RangeMetricValue {
  readonly lower?: number;
  readonly upper?: number;
}

export interface RankedKeywordTargetsForAdGroupRequest {
  readonly adGroupId: string;
  readonly bidsEnabled?: boolean;
  readonly campaignId: string;
  readonly recommendationType: string;
  readonly targets?: ReadonlyArray<Inline456>;
}

export interface RankedKeywordTargetsForAsinsRequest {
  readonly asins: ReadonlyArray<string>;
  readonly biddingStrategy?: string;
  readonly bidsEnabled?: boolean;
  readonly productDetailsList?: ReadonlyArray<Inline458>;
  readonly recommendationType: string;
  readonly targets?: ReadonlyArray<Inline459>;
}

export interface RankedTargetResponse {
  readonly keywordTargetList?: ReadonlyArray<Inline461>;
}

export interface RankedTargetWithThemedBids {
  readonly bidInfo?: ReadonlyArray<Inline463>;
  readonly keyword?: string;
  readonly recId?: string;
  readonly searchTermImpressionRank?: number;
  readonly searchTermImpressionShare?: number;
  readonly translation?: string;
  readonly userSelectedKeyword?: boolean;
}

export type RankedTargetWithThemedBidsList = ReadonlyArray<Inline465>;

export interface RankedTargetWithThemedBidsResponse {
  readonly impactMetrics?: ReadonlyArray<Inline467>;
  readonly keywordTargetList?: ReadonlyArray<Inline469>;
}

export interface RatingRange {
  readonly max?: number;
  readonly min?: number;
}

export interface RecKeywordTarget {
  readonly bidInfo?: ReadonlyArray<Inline472>;
  readonly keyword?: string;
  readonly recId?: string;
  readonly searchTermImpressionRank?: number;
  readonly searchTermImpressionShare?: number;
  readonly translation?: string;
  readonly userSelectedKeyword?: boolean;
}

export interface Recommendation {
  readonly campaignId: string;
  readonly forecastEstimates?: Inline474;
  readonly recommendationDetails: unknown | unknown | unknown | unknown | unknown | unknown;
  readonly recommendationType: string;
}

export type RecommendationDetails = unknown | unknown | unknown | unknown | unknown | unknown;

export interface RecommendationOptions {
  readonly locale?: string;
  readonly maxRecommendations?: number;
  readonly sortDimension?: string;
}

export type RecommendationType = "BIDDING_STRATEGY" | "BUDGET_STRATEGY" | "KEYWORD" | "KEYWORD_GROUP" | "PLACEMENT_BIDDING" | "SHOPPER_COHORT" | string;

export interface Recurrence {
  readonly daysOfWeek?: ReadonlyArray<string>;
  readonly intraDaySchedule?: ReadonlyArray<Inline479>;
  readonly type?: string;
}

export type RecurrenceType = "DAILY" | string;

export interface Refinements {
  readonly ageRanges?: ReadonlyArray<Inline482>;
  readonly brands?: ReadonlyArray<Inline483>;
  readonly genres?: ReadonlyArray<Inline484>;
}

export interface RefinementsLoP {
  readonly ageRanges?: ReadonlyArray<Inline486>;
  readonly brands?: ReadonlyArray<Inline487>;
  readonly genres?: ReadonlyArray<Inline488>;
}

export type RuleAction = "ADOPT" | string;

export type RuleCampaignId = string;

export interface RuleCondition {
  readonly comparisonOperator: string;
  readonly metricName: string;
  readonly threshold: number;
}

export type RuleConditionList = ReadonlyArray<Inline493>;

export type RuleConditionMetric = "AVERAGE_BID" | "ROAS" | string;

export type RuleCreationDate = string;

export interface RuleDuration {
  readonly dateRangeTypeRuleDuration?: Inline497;
  readonly eventTypeRuleDuration?: Inline498;
}

export type RuleName = string;

export interface RuleNotification {
  readonly campaignId?: string;
  readonly campaignOptimizationId?: string;
  readonly notificationString?: string;
  readonly ruleState?: string;
}

export interface RuleNotificationError {
  readonly Error?: Inline502;
  readonly campaignId?: string;
}

export interface RuleRecommendation {
  readonly campaignId?: string;
  readonly performanceMetrics?: Inline504;
  readonly performanceMetricsExists?: boolean;
}

export interface RuleRecommendationError {
  readonly Error?: Inline506;
  readonly campaignId?: string;
}

export interface RuleRecommendationMetrics {
  readonly roas?: number;
}

export type RuleState = "DISABLED" | "ENABLED" | string;

export type RuleStatus = "ACTIVE" | "ARCHIVED" | string;

export type RuleType = "BID" | "KEYWORD" | "PRODUCT" | string;

export interface SearchBrandsParams {
  readonly keyword: string;
}

export interface SearchBrandsRequest {
  readonly keyword: string;
}

export interface SearchBrandsResponse {
  readonly data: ReadonlyArray<Inline2944>;
}

export interface SearchOptimizationRulesParams {
  readonly campaignFilter?: Inline3037;
  readonly nextToken?: string;
  readonly optimizationRuleFilter?: Inline3038;
  readonly pageSize?: number;
}

export interface SearchOptimizationRulesResponse {
  readonly data: Inline3042;
}

export interface SevenDaysEstimatedOpportunities {
  readonly endDate?: string;
  readonly estimatedIncrementalClicksLower?: number;
  readonly estimatedIncrementalClicksUpper?: number;
  readonly startDate?: string;
}

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

export interface ShopperCohortBiddingRecommendation {
  readonly action: string;
  readonly audienceSegments: ReadonlyArray<Inline515>;
  readonly percentage: number;
  readonly shopperCohortType: string;
}

export interface SPBudgetRule {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline517;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface SPBudgetRuleDetails {
  readonly budgetIncreaseBy?: Inline523;
  readonly duration?: Inline524;
  readonly name?: string;
  readonly performanceMeasureCondition?: Inline526;
  readonly recurrence?: Inline527;
  readonly ruleType?: string;
}

export interface SPBudgetRulesRecommendationError {
  readonly code?: string;
  readonly details?: string;
}

export interface SPBudgetRulesRecommendationEvent {
  readonly endDate?: string;
  readonly eventId?: string;
  readonly eventName?: string;
  readonly startDate?: string;
  readonly suggestedBudgetIncreasePercent?: number;
}

export interface SPBudgetRulesRecommendationEventRequest {
  readonly campaignId: string;
}

export interface SPBudgetRulesRecommendationEventResponse {
  readonly recommendedBudgetRuleEvents?: ReadonlyArray<Inline532>;
}

export interface SPCampaignBudgetRule {
  readonly createdDate?: number;
  readonly lastUpdatedDate?: number;
  readonly ruleDetails?: Inline534;
  readonly ruleId: string;
  readonly ruleState?: string;
  readonly ruleStatus?: string;
}

export interface SPCampaignOptimizationNotificationAPIRequest {
  readonly campaignIds: ReadonlyArray<string>;
}

export interface SPCampaignOptimizationNotificationAPIResponse {
  readonly CampaignOptimizationNotifications?: ReadonlyArray<Inline541>;
  readonly CampaignOptimizationRecommendationsError?: ReadonlyArray<Inline542>;
}

export interface SPCampaignOptimizationRecommendationAPIResponse {
  readonly CampaignOptimizationRecommendations?: ReadonlyArray<Inline544>;
  readonly CampaignOptimizationRecommendationsError?: ReadonlyArray<Inline545>;
}

export interface SPCampaignOptimizationRecommendationsAPIRequest {
  readonly campaignIds: ReadonlyArray<string>;
  readonly requirePerformanceMetrics?: boolean;
}

export interface SpCampaignsBudgetUsageParams {
  readonly campaignIds?: ReadonlyArray<string>;
}

export interface SpCampaignsBudgetUsageResponse {

}

export interface SpecialEvent {
  readonly benchmark?: Inline548;
  readonly budgetModifier?: number;
  readonly dailyBudget?: number;
  readonly endDate?: string;
  readonly eventKey?: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface SPGetAllRuleEventRequest {

}

export interface SPGetAllRuleEventResponse {
  readonly events?: ReadonlyArray<Inline553>;
  readonly groupedEvents?: ReadonlyArray<Inline554>;
}

export interface SPGetAllRuleEventsParams {

}

export interface SPGetAllRuleEventsResponse {
  readonly data: Inline3164;
}

export interface SPGetAssociatedCampaignsResponse {
  readonly associatedCampaigns?: ReadonlyArray<Inline556>;
  readonly nextToken?: string;
}

export interface SPGetBudgetRulesRecommendationParams {
  readonly body: Inline2829;
}

export interface SPGetBudgetRulesRecommendationResponse {
  readonly data: Inline2831;
}

export interface SPGetRuleEventError {
  readonly code?: string;
  readonly details?: string;
}

export interface SPGroupedEvent {
  readonly endDate?: string;
  readonly groupedEventId?: string;
  readonly groupedEventName?: string;
  readonly startDate?: string;
}

export interface SPIndividualEvent {
  readonly endDate?: string;
  readonly eventId?: string;
  readonly eventName?: string;
  readonly startDate?: string;
}

export interface SPKeywordGroupsException {
  readonly details?: string;
  readonly errors?: ReadonlyArray<Inline561>;
  readonly httpStatusCode?: string;
  readonly requestId?: string;
}

export interface SPListAssociatedBudgetRulesResponse {
  readonly associatedRules?: ReadonlyArray<Inline563>;
}

export type SponsoredProductsAccessDeniedErrorCode = "ACCESS_DENIED" | string;

export type SponsoredProductsAccessDeniedExceptionCode = "ACCESS_DENIED" | string;

export interface SponsoredProductsAccessDeniedExceptionResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface SponsoredProductsAdEligibilityError {
  readonly cause?: Inline572;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export type SponsoredProductsAdEligibilityErrorReason = "AD_INELIGIBLE" | string;

export interface SponsoredProductsAdGroup {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly defaultBid: number;
  readonly extendedData?: Inline575;
  readonly globalAdGroupId?: string;
  readonly name: string;
  readonly state: string;
}

export interface SponsoredProductsAdGroupAccessError {
  readonly errorType: string;
  readonly errorValue: Inline577;
}

export interface SponsoredProductsAdGroupAccessErrorSelector {
  readonly entityNotFoundError?: Inline586;
  readonly internalServerError?: Inline587;
  readonly invalidInputError?: Inline588;
  readonly malformedValueError?: Inline589;
  readonly missingValueError?: Inline590;
  readonly otherError?: Inline591;
  readonly rangeError?: Inline592;
  readonly throttledError?: Inline593;
}

export interface SponsoredProductsAdGroupAccessExceptionResponseContent {
  readonly code: string;
  readonly errors?: ReadonlyArray<Inline595>;
  readonly message: string;
}

export interface SponsoredProductsAdGroupExtendedData {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline604>;
}

export interface SponsoredProductsAdGroupFailureResponseItem {
  readonly errors?: ReadonlyArray<Inline606>;
  readonly index: number;
}

export interface SponsoredProductsAdGroupMutationError {
  readonly errorType: string;
  readonly errorValue: Inline621;
}

export interface SponsoredProductsAdGroupMutationErrorSelector {
  readonly applicableMarketplacesError?: Inline636;
  readonly biddingError?: Inline637;
  readonly billingError?: Inline638;
  readonly duplicateValueError?: Inline639;
  readonly entityNotFoundError?: Inline640;
  readonly entityQuotaError?: Inline641;
  readonly entityStateError?: Inline642;
  readonly internalServerError?: Inline643;
  readonly malformedValueError?: Inline644;
  readonly missingValueError?: Inline645;
  readonly otherError?: Inline646;
  readonly parentEntityError?: Inline647;
  readonly rangeError?: Inline648;
  readonly throttledError?: Inline649;
}

export interface SponsoredProductsAdGroupMutationExceptionResponseContent {
  readonly code: string;
  readonly errors?: ReadonlyArray<Inline651>;
  readonly message: string;
}

export type SponsoredProductsAdGroupServingStatus = "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_BUDGET" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ENDED" | "OTHER" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | string;

export interface SponsoredProductsAdGroupServingStatusDetail {
  readonly helpUrl?: string;
  readonly message?: string;
  readonly name?: string;
}

export type SponsoredProductsAdGroupServingStatusReason = "ADVERTISER_ARCHIVED_DETAIL" | "ADVERTISER_EXCEED_SPENDS_LIMIT_DETAIL" | "ADVERTISER_OUT_OF_BUDGET_DETAIL" | "ADVERTISER_PAUSED_DETAIL" | "ADVERTISER_PAYMENT_FAILURE_DETAIL" | "ADVERTISER_POLICING_PENDING_REVIEW_DETAIL" | "ADVERTISER_POLICING_SUSPENDED_DETAIL" | "AD_GROUP_ARCHIVED_DETAIL" | "AD_GROUP_INCOMPLETE_DETAIL" | "AD_GROUP_LOW_BID_DETAIL" | "AD_GROUP_PAUSED_DETAIL" | "AD_GROUP_POLICING_CREATIVE_REJECTED_DETAIL" | "AD_GROUP_POLICING_PENDING_REVIEW_DETAIL" | "AD_GROUP_STATUS_ENABLED_DETAIL" | "CAMPAIGN_ARCHIVED_DETAIL" | "CAMPAIGN_INCOMPLETE_DETAIL" | "CAMPAIGN_OUT_OF_BUDGET_DETAIL" | "CAMPAIGN_PAUSED_DETAIL" | "CAMPAIGN_STATUS_ENABLED_DETAIL" | "ENDED_DETAIL" | "OTHER" | "PENDING_REVIEW_DETAIL" | "PENDING_START_DATE_DETAIL" | "PORTFOLIO_ARCHIVED_DETAIL" | "PORTFOLIO_ENDED_DETAIL" | "PORTFOLIO_OUT_OF_BUDGET_DETAIL" | "PORTFOLIO_PAUSED_DETAIL" | "PORTFOLIO_PENDING_START_DATE_DETAIL" | "PORTFOLIO_STATUS_ENABLED_DETAIL" | "REJECTED_DETAIL" | string;

export interface SponsoredProductsAdGroupSuccessResponseItem {
  readonly adGroup?: Inline669;
  readonly adGroupId?: string;
  readonly index: number;
}

export type SponsoredProductsAdServingStatus = "ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_BUDGET" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "ADVERTISER_STATUS_ENABLED" | "AD_ARCHIVED" | "AD_CREATION_FAILED" | "AD_CREATION_OFFLINE_FAILED" | "AD_CREATION_OFFLINE_IN_PROGRESS" | "AD_CREATION_OFFLINE_PENDING" | "AD_ELIGIBLE" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "AD_INELIGIBLE" | "AD_LANDING_PAGE_NOT_AVAILABLE" | "AD_MISSING_DECORATION" | "AD_MISSING_IMAGE" | "AD_NOT_BUYABLE" | "AD_NOT_IN_BUYBOX" | "AD_NO_PURCHASABLE_OFFER" | "AD_OUT_OF_STOCK" | "AD_PAUSED" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_SUSPENDED" | "AD_STATUS_LIVE" | "CAMPAIGN_ADS_NOT_DELIVERING" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_ENDED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_PENDING_START_DATE" | "CAMPAIGN_STATUS_ENABLED" | "ELIGIBLE" | "ENDED" | "INELIGIBLE" | "LANDING_PAGE_NOT_AVAILABLE" | "MISSING_DECORATION" | "MISSING_IMAGE" | "NOT_BUYABLE" | "NOT_IN_BUYBOX" | "NO_INVENTORY" | "NO_PURCHASABLE_OFFER" | "OTHER" | "OUT_OF_STOCK" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PIR_RULE_EXCLUDED" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "SECURITY_SCAN_PENDING_REVIEW" | "SECURITY_SCAN_REJECTED" | "STATUS_UNAVAILABLE" | "TARGETING_CLAUSE_ARCHIVED" | "TARGETING_CLAUSE_BLOCKED" | "TARGETING_CLAUSE_PAUSED" | "TARGETING_CLAUSE_POLICING_SUSPENDED" | "TARGETING_CLAUSE_STATUS_LIVE" | string;

export interface SponsoredProductsAdServingStatusDetail {
  readonly helpUrl?: string;
  readonly message?: string;
  readonly name?: string;
}

export type SponsoredProductsAdServingStatusReason = "ACCOUNT_OUT_OF_BUDGET_DETAIL" | "ADULT_PRODUCT" | "ADVERTISER_ACCOUNT_OUT_OF_BUDGET_DETAIL" | "ADVERTISER_ARCHIVED_DETAIL" | "ADVERTISER_EXCEED_SPENDS_LIMIT_DETAIL" | "ADVERTISER_OUT_OF_BUDGET_DETAIL" | "ADVERTISER_PAUSED_DETAIL" | "ADVERTISER_PAYMENT_FAILURE_DETAIL" | "ADVERTISER_POLICING_PENDING_REVIEW_DETAIL" | "ADVERTISER_POLICING_SUSPENDED_DETAIL" | "ADVERTISER_STATUS_ENABLED_DETAIL" | "AD_ARCHIVED_DETAIL" | "AD_CREATION_OFFLINE_FAILED" | "AD_CREATION_OFFLINE_IN_PROGRESS" | "AD_CREATION_OFFLINE_PENDING" | "AD_GROUP_ARCHIVED_DETAIL" | "AD_GROUP_INCOMPLETE_DETAIL" | "AD_GROUP_LOW_BID_DETAIL" | "AD_GROUP_PAUSED_DETAIL" | "AD_GROUP_POLICING_CREATIVE_REJECTED_DETAIL" | "AD_GROUP_POLICING_PENDING_REVIEW_DETAIL" | "AD_GROUP_STATUS_ENABLED_DETAIL" | "AD_PAUSED_DETAIL" | "AD_POLICING_PENDING_REVIEW" | "AD_POLICING_PENDING_REVIEW_DETAIL" | "AD_POLICING_SUSPENDED_DETAIL" | "AD_STATUS_LIVE_DETAIL" | "ASIN_QUARANTINED" | "BRAND_REMOVED" | "CAMPAIGN_ADS_NOT_DELIVERING_DETAIL" | "CAMPAIGN_ARCHIVED_DETAIL" | "CAMPAIGN_INCOMPLETE_DETAIL" | "CAMPAIGN_OUT_OF_BUDGET_DETAIL" | "CAMPAIGN_PAUSED_DETAIL" | "CAMPAIGN_STATUS_ENABLED_DETAIL" | "CBA_NOT_SUPPORTED" | "CLOSED_GL" | "CP_INELIGIBLE" | "CP_INELIGIBLE_ASIN" | "CP_INELIGIBLE_UNKNOWN" | "CP_INELIGIBLE_VENDOR" | "ELIGIBLE_DETAIL" | "ENDED_DETAIL" | "INELIGIBLE_CONDITION" | "INVENTORY_INCOMPLETE" | "ITEM_MISSING" | "LANDING_PAGE_INELIGIBLE" | "LANDING_PAGE_NOT_AVAILABLE_DETAIL" | "MISSING_DECORATION_DETAIL" | "MISSING_IMAGE_DETAIL" | "MODERATION_ADULT_NOVELTY_PV_DETAIL" | "MODERATION_ADULT_PRODUCT_PV_DETAIL" | "MODERATION_ADULT_SOFTLINES_PV_DETAIL" | "MODERATION_CLAIM_WEIGHTLOSS_PV_DETAIL" | "MODERATION_CONTENT_NUDITY_PV_DETAIL" | "MODERATION_CONTENT_PROVOCATIVE_PV_DETAIL" | "MODERATION_CONTENT_SMOKING_PV_DETAIL" | "MODERATION_CRITICAL_EVENTS_PV_DETAIL" | "MODERATION_ERROR_404_PV_DETAIL" | "MODERATION_GRAPHICAL_SEXUAL_IMAGES_PV_DETAIL" | "MODERATION_HFSS_PRODUCT_PV_DETAIL" | "MODERATION_LANGUAGE_OFFENSIVE_PV_DETAIL" | "MODERATION_NOT_COMPLIANT_TO_AD_POLICY_PV_DETAIL" | "MODERATION_SMOKING_RELATED_PV_DETAIL" | "NOT_BUYABLE_DETAIL" | "NOT_IN_BUYBOX_DETAIL" | "NO_INVENTORY_DETAIL" | "NO_PURCHASABLE_OFFER_DETAIL" | "OFFER_MISSING_DETAIL" | "OTHER" | "OUT_OF_STOCK_DETAIL" | "PENDING_REVIEW_DETAIL" | "PENDING_START_DATE_DETAIL" | "PIR_RULE_EXCLUDED" | "PORTFOLIO_ARCHIVED_DETAIL" | "PORTFOLIO_ENDED_DETAIL" | "PORTFOLIO_OUT_OF_BUDGET_DETAIL" | "PORTFOLIO_PAUSED_DETAIL" | "PORTFOLIO_PENDING_START_DATE_DETAIL" | "PORTFOLIO_STATUS_ENABLED_DETAIL" | "REJECTED_DETAIL" | "RESTRICTED_GL" | "SECURITY_SCAN_PENDING_REVIEW" | "SECURITY_SCAN_REJECTED" | "SKU_DEFECTIVE" | "STATUS_UNAVAILABLE" | "TARGETING_CLAUSE_ARCHIVED_DETAIL" | "TARGETING_CLAUSE_BLOCKED_DETAIL" | "TARGETING_CLAUSE_PAUSED_DETAIL" | "TARGETING_CLAUSE_POLICING_SUSPENDED_DETAIL" | "TARGETING_CLAUSE_STATUS_LIVE_DETAIL" | "VARIATION_PARENT" | string;

export interface SponsoredProductsApplicableMarketplacesError {
  readonly cause?: Inline674;
  readonly message: string;
  readonly reason: string;
}

export type SponsoredProductsApplicableMarketplacesErrorReason = "APPLICABLE_MARKETPLACES_MISMATCH_ERROR" | string;

export interface SponsoredProductsAsinFilter {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface SponsoredProductsAsinOwnershipError {
  readonly cause?: Inline678;
  readonly message: string;
  readonly reason: string;
}

export type SponsoredProductsAsinOwnershipErrorReason = "ASIN_NOT_OWNED_BY_AUTHOR" | string;

export interface SponsoredProductsAudienceSegment {
  readonly audienceId: string;
  readonly audienceSegmentType?: string;
}

export type SponsoredProductsAudienceSegmentType = "BEHAVIOR_DYNAMIC" | "SPONSORED_ADS_AMC" | string;

export interface SponsoredProductsBiddingError {
  readonly cause?: Inline683;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export type SponsoredProductsBiddingErrorReason = "BID_AUDIENCES_MORE_THAN_ALLOWED" | "BID_GT_BUDGET" | "BID_INVALID_AUDIENCE_ID" | "BID_INVALID_AUDIENCE_SEGMENT_TYPE" | "BID_INVALID_PLACEMENT" | "BID_INVALID_SHOPPER_COHORT_TYPE" | "BID_MISSING_AUDIENCES" | "BID_OUT_OF_MARKET_PLACE_RANGE" | "BID_SHOPPER_COHORTS_MORE_THAN_ALLOWED" | string;

export type SponsoredProductsBiddingStrategy = "AUTO_FOR_SALES" | "LEGACY_FOR_SALES" | "MANUAL" | "OTHER" | "RULE_BASED" | string;

export interface SponsoredProductsBillingError {
  readonly cause?: Inline687;
  readonly message: string;
  readonly reason: string;
}

export type SponsoredProductsBillingErrorReason = "ADVERTISER_BILLING_SETUP_INCOMPLETE" | "ADVERTISER_SUSPENDED" | "BILLING_ACCOUNT_NOT_FOUND" | "EXPIRED_PAYMENT_METHOD" | "PAYMENT_PROFILE_NOT_FOUND" | "VETTING_FAILURE" | string;

export interface SponsoredProductsBudget {
  readonly budget: number;
  readonly budgetType: string;
  readonly effectiveBudget?: number;
}

export interface SponsoredProductsBudgetError {
  readonly cause?: Inline691;
  readonly lowerLimit?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export type SponsoredProductsBudgetErrorReason = "BUDGETING_POLICY_INVALID" | "BUDGET_CURRENCY_DOES_NOT_MATCH_MARKETPLACE_SETTINGS" | "BUDGET_LT_DEFAULT_BIDS" | "BUDGET_LT_KEYWORD_BIDS" | "BUDGET_LT_PREDEFINED_TARGET_BIDS" | "BUDGET_OUT_OF_MARKET_PLACE_RANGE" | "BUDGET_TOO_HIGH" | "BUDGET_TOO_LOW" | "MISSING_BUDGETING_POLICY" | "MISSING_IN_BUDGET_FLAG" | string;

export type SponsoredProductsBudgetType = "DAILY" | "OTHER" | string;

export interface SponsoredProductsBulkAdGroupOperationResponse {
  readonly error?: ReadonlyArray<Inline695>;
  readonly success?: ReadonlyArray<Inline709>;
}

export interface SponsoredProductsBulkCampaignNegativeKeywordOperationResponse {
  readonly error?: ReadonlyArray<Inline711>;
  readonly success?: ReadonlyArray<Inline723>;
}

export interface SponsoredProductsBulkCampaignNegativeTargetingClauseOperationResponse {
  readonly error?: ReadonlyArray<Inline725>;
  readonly success?: ReadonlyArray<Inline738>;
}

export interface SponsoredProductsBulkCampaignOperationResponse {
  readonly error?: ReadonlyArray<Inline742>;
  readonly success?: ReadonlyArray<Inline758>;
}

export interface SponsoredProductsBulkKeywordOperationResponse {
  readonly error?: ReadonlyArray<Inline765>;
  readonly success?: ReadonlyArray<Inline780>;
}

export interface SponsoredProductsBulkNegativeKeywordOperationResponse {
  readonly error?: ReadonlyArray<Inline782>;
  readonly success?: ReadonlyArray<Inline795>;
}

export interface SponsoredProductsBulkNegativeTargetingClauseOperationResponse {
  readonly error?: ReadonlyArray<Inline797>;
  readonly success?: ReadonlyArray<Inline810>;
}

export interface SponsoredProductsBulkProductAdOperationResponse {
  readonly error?: ReadonlyArray<Inline814>;
  readonly success?: ReadonlyArray<Inline830>;
}

export interface SponsoredProductsBulkTargetingClauseOperationResponse {
  readonly error?: ReadonlyArray<Inline833>;
  readonly success?: ReadonlyArray<Inline848>;
}

export interface SponsoredProductsCampaign {
  readonly autoManageCampaign?: boolean;
  readonly budget: Inline852;
  readonly campaignId: string;
  readonly dynamicBidding?: Inline853;
  readonly endDate?: string;
  readonly extendedData?: Inline855;
  readonly globalCampaignId?: string;
  readonly marketplaceBudgetAllocation?: string;
  readonly name: string;
  readonly offAmazonSettings?: Inline856;
  readonly portfolioId?: string;
  readonly siteRestrictions?: ReadonlyArray<string>;
  readonly startDate: string;
  readonly state: string;
  readonly tags?: Inline857;
  readonly targetingType: string;
}

export interface SponsoredProductsCampaignAccessError {
  readonly errorType: string;
  readonly errorValue: Inline859;
}

export interface SponsoredProductsCampaignAccessErrorSelector {
  readonly dateError?: Inline869;
  readonly entityNotFoundError?: Inline870;
  readonly internalServerError?: Inline871;
  readonly invalidInputError?: Inline872;
  readonly malformedValueError?: Inline873;
  readonly missingValueError?: Inline874;
  readonly otherError?: Inline875;
  readonly rangeError?: Inline876;
  readonly throttledError?: Inline877;
}

export interface SponsoredProductsCampaignAccessExceptionResponseContent {
  readonly code: string;
  readonly errors?: ReadonlyArray<Inline879>;
  readonly message: string;
}

export interface SponsoredProductsCampaignExtendedData {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline889>;
}

export interface SponsoredProductsCampaignMutationError {
  readonly errorType: string;
  readonly errorValue: Inline891;
}

export interface SponsoredProductsCampaignMutationErrorSelector {
  readonly biddingError?: Inline908;
  readonly billingError?: Inline909;
  readonly budgetError?: Inline910;
  readonly currencyError?: Inline911;
  readonly dateError?: Inline912;
  readonly duplicateValueError?: Inline913;
  readonly entityNotFoundError?: Inline914;
  readonly entityQuotaError?: Inline915;
  readonly entityStateError?: Inline916;
  readonly internalServerError?: Inline917;
  readonly malformedValueError?: Inline918;
  readonly missingValueError?: Inline919;
  readonly otherError?: Inline920;
  readonly parentEntityError?: Inline921;
  readonly rangeError?: Inline922;
  readonly throttledError?: Inline923;
}

export interface SponsoredProductsCampaignMutationExceptionResponseContent {
  readonly code: string;
  readonly errors?: ReadonlyArray<Inline925>;
  readonly message: string;
}

export interface SponsoredProductsCampaignMutationFailureResponseItem {
  readonly errors?: ReadonlyArray<Inline942>;
  readonly index: number;
}

export interface SponsoredProductsCampaignMutationSuccessResponseItem {
  readonly campaign?: Inline959;
  readonly campaignId?: string;
  readonly index: number;
}

export interface SponsoredProductsCampaignNegativeKeyword {
  readonly campaignId: string;
  readonly extendedData?: Inline966;
  readonly globalKeywordId?: string;
  readonly keywordId: string;
  readonly keywordText: string;
  readonly matchType: string;
  readonly state: string;
}

export interface SponsoredProductsCampaignNegativeKeywordAccessError {
  readonly errorType: string;
  readonly errorValue: Inline968;
}

export interface SponsoredProductsCampaignNegativeKeywordAccessErrorSelector {
  readonly entityNotFoundError?: Inline977;
  readonly internalServerError?: Inline978;
  readonly invalidInputError?: Inline979;
  readonly malformedValueError?: Inline980;
  readonly missingValueError?: Inline981;
  readonly otherError?: Inline982;
  readonly rangeError?: Inline983;
  readonly throttledError?: Inline984;
}

export interface SponsoredProductsCampaignNegativeKeywordAccessExceptionResponseContent {
  readonly code: string;
  readonly errors?: ReadonlyArray<Inline986>;
  readonly message: string;
}

export interface SponsoredProductsCampaignNegativeKeywordExtendedData {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline995>;
}

export interface SponsoredProductsCampaignNegativeKeywordFailureResponseItem {
  readonly errors?: ReadonlyArray<Inline997>;
  readonly index: number;
}

export interface SponsoredProductsCampaignNegativeKeywordMutationError {
  readonly errorType: string;
  readonly errorValue: Inline1010;
}

export interface SponsoredProductsCampaignNegativeKeywordMutationErrorSelector {
  readonly billingError?: Inline1023;
  readonly duplicateValueError?: Inline1024;
  readonly entityNotFoundError?: Inline1025;
  readonly entityQuotaError?: Inline1026;
  readonly entityStateError?: Inline1027;
  readonly internalServerError?: Inline1028;
  readonly malformedValueError?: Inline1029;
  readonly missingValueError?: Inline1030;
  readonly otherError?: Inline1031;
  readonly parentEntityError?: Inline1032;
  readonly rangeError?: Inline1033;
  readonly throttledError?: Inline1034;
}

export interface SponsoredProductsCampaignNegativeKeywordMutationExceptionResponseContent {
  readonly code: string;
  readonly errors?: ReadonlyArray<Inline1036>;
  readonly message: string;
}

export interface SponsoredProductsCampaignNegativeKeywordSuccessResponseItem {
  readonly campaignNegativeKeyword?: Inline1049;
  readonly campaignNegativeKeywordId?: string;
  readonly index: number;
}

export interface SponsoredProductsCampaignNegativeTargetingClause {
  readonly campaignId: string;
  readonly expression: ReadonlyArray<Inline1051>;
  readonly extendedData?: Inline1052;
  readonly globalTargetId?: string;
  readonly resolvedExpression: ReadonlyArray<Inline1053>;
  readonly state: string;
  readonly targetId: string;
}

export interface SponsoredProductsCampaignNegativeTargetingClauseExtendedData {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline1055>;
}

export interface SponsoredProductsCampaignNegativeTargetingClauseFailureResponseItem {
  readonly errors?: ReadonlyArray<Inline1057>;
  readonly index: number;
}

export interface SponsoredProductsCampaignNegativeTargetingClauseSuccessResponseItem {
  readonly campaignNegativeTargetingClauseId?: string;
  readonly campaignNegativeTargetingClauses?: Inline1071;
  readonly index: number;
}

export interface SponsoredProductsCampaignNegativeTargetsAccessError {
  readonly errorType: string;
  readonly errorValue: Inline1075;
}

export interface SponsoredProductsCampaignNegativeTargetsAccessErrorSelector {
  readonly entityNotFoundError?: Inline1084;
  readonly internalServerError?: Inline1085;
  readonly invalidInputError?: Inline1086;
  readonly malformedValueError?: Inline1087;
  readonly missingValueError?: Inline1088;
  readonly otherError?: Inline1089;
  readonly rangeError?: Inline1090;
  readonly throttledError?: Inline1091;
}

export interface SponsoredProductsCampaignNegativeTargetsAccessExceptionResponseContent {
  readonly code: string;
  readonly errors?: ReadonlyArray<Inline1093>;
  readonly message: string;
}

export interface SponsoredProductsCampaignNegativeTargetsMutationError {
  readonly errorType: string;
  readonly errorValue: Inline1102;
}

export interface SponsoredProductsCampaignNegativeTargetsMutationErrorSelector {
  readonly billingError?: Inline1116;
  readonly duplicateValueError?: Inline1117;
  readonly entityNotFoundError?: Inline1118;
  readonly entityQuotaError?: Inline1119;
  readonly entityStateError?: Inline1120;
  readonly internalServerError?: Inline1121;
  readonly malformedValueError?: Inline1122;
  readonly missingValueError?: Inline1123;
  readonly otherError?: Inline1124;
  readonly parentEntityError?: Inline1125;
  readonly rangeError?: Inline1126;
  readonly targetingClauseSetupError?: Inline1127;
  readonly throttledError?: Inline1128;
}

export interface SponsoredProductsCampaignNegativeTargetsMutationExceptionResponseContent {
  readonly code: string;
  readonly errors?: ReadonlyArray<Inline1130>;
  readonly message: string;
}

export type SponsoredProductsCampaignServingStatus = "ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_BUDGET" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ENDED" | "OTHER" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | string;

export interface SponsoredProductsCampaignServingStatusDetail {
  readonly helpUrl?: string;
  readonly message?: string;
  readonly name?: string;
}

export type SponsoredProductsCampaignServingStatusReason = "ACCOUNT_OUT_OF_BUDGET_DETAIL" | "ADVERTISER_ARCHIVED_DETAIL" | "ADVERTISER_EXCEED_SPENDS_LIMIT_DETAIL" | "ADVERTISER_OUT_OF_BUDGET_DETAIL" | "ADVERTISER_PAUSED_DETAIL" | "ADVERTISER_PAYMENT_FAILURE_DETAIL" | "ADVERTISER_POLICING_PENDING_REVIEW_DETAIL" | "ADVERTISER_POLICING_SUSPENDED_DETAIL" | "CAMPAIGN_ARCHIVED_DETAIL" | "CAMPAIGN_INCOMPLETE_DETAIL" | "CAMPAIGN_OUT_OF_BUDGET_DETAIL" | "CAMPAIGN_PAUSED_DETAIL" | "CAMPAIGN_STATUS_ENABLED_DETAIL" | "ENDED_DETAIL" | "OTHER" | "PENDING_REVIEW_DETAIL" | "PENDING_START_DATE_DETAIL" | "PORTFOLIO_ARCHIVED_DETAIL" | "PORTFOLIO_ENDED_DETAIL" | "PORTFOLIO_OUT_OF_BUDGET_DETAIL" | "PORTFOLIO_PAUSED_DETAIL" | "PORTFOLIO_PENDING_START_DATE_DETAIL" | "PORTFOLIO_STATUS_ENABLED_DETAIL" | "REJECTED_DETAIL" | string;

export interface SponsoredProductsCreateAdGroup {
  readonly campaignId: string;
  readonly defaultBid: number;
  readonly name: string;
  readonly state: string;
}

export interface SponsoredProductsCreateCampaign {
  readonly autoManageCampaign?: boolean;
  readonly budget: Inline1148;
  readonly dynamicBidding?: Inline1149;
  readonly endDate?: string;
  readonly name: string;
  readonly offAmazonSettings?: Inline1151;
  readonly portfolioId?: string;
  readonly siteRestrictions?: ReadonlyArray<string>;
  readonly startDate?: string;
  readonly state: string;
  readonly tags?: Inline1152;
  readonly targetingType: string;
}

export interface SponsoredProductsCreateCampaignNegativeKeyword {
  readonly campaignId: string;
  readonly keywordText: string;
  readonly matchType: string;
  readonly state: string;
}

export interface SponsoredProductsCreateCampaignNegativeTargetingClause {
  readonly campaignId: string;
  readonly expression: ReadonlyArray<Inline1155>;
  readonly state: string;
}

export type SponsoredProductsCreateExpressionType = "MANUAL" | string;

export interface SponsoredProductsCreateKeyword {
  readonly adGroupId: string;
  readonly bid?: number;
  readonly campaignId: string;
  readonly keywordText: string;
  readonly matchType: string;
  readonly nativeLanguageKeyword?: string;
  readonly nativeLanguageLocale?: string;
  readonly state: string;
}

export interface SponsoredProductsCreateKeywordTarget {
  readonly bid?: number;
  readonly keyword: string;
  readonly matchType: string;
}

export interface SponsoredProductsCreateNegativeKeyword {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly keywordText: string;
  readonly matchType: string;
  readonly nativeLanguageKeyword?: string;
  readonly nativeLanguageLocale?: string;
  readonly state: string;
}

export interface SponsoredProductsCreateNegativeTargetingClause {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly expression: ReadonlyArray<Inline1161>;
  readonly state: string;
}

export type SponsoredProductsCreateOrUpdateBiddingStrategy = "AUTO_FOR_SALES" | "LEGACY_FOR_SALES" | "MANUAL" | "RULE_BASED" | string;

export interface SponsoredProductsCreateOrUpdateBudget {
  readonly budget: number;
  readonly budgetType: string;
}

export type SponsoredProductsCreateOrUpdateBudgetType = "DAILY" | string;

export interface SponsoredProductsCreateOrUpdateDynamicBidding {
  readonly placementBidding?: ReadonlyArray<Inline1166>;
  readonly shopperCohortBidding?: ReadonlyArray<Inline1167>;
  readonly strategy?: string;
}

export type SponsoredProductsCreateOrUpdateEntityState = "ENABLED" | "PAUSED" | "PROPOSED" | string;

export type SponsoredProductsCreateOrUpdateMatchType = "BROAD" | "EXACT" | "PHRASE" | string;

export type SponsoredProductsCreateOrUpdateNegativeMatchType = "NEGATIVE_BROAD" | "NEGATIVE_EXACT" | "NEGATIVE_PHRASE" | string;

export interface SponsoredProductsCreateOrUpdateNegativeTargetingExpressionPredicate {
  readonly type: string;
  readonly value?: string;
}

export type SponsoredProductsCreateOrUpdateNegativeTargetingExpressionPredicateType = "ASIN_BRAND_SAME_AS" | "ASIN_SAME_AS" | string;

export type SponsoredProductsCreateOrUpdateOffAmazonBudgetControlStrategy = "MAXIMIZE_REACH" | "MINIMIZE_SPEND" | string;

export interface SponsoredProductsCreateOrUpdateOffAmazonSettings {
  readonly offAmazonBudgetControlStrategy?: string;
}

export interface SponsoredProductsCreateProductAd {
  readonly adGroupId: string;
  readonly asin?: string;
  readonly campaignId: string;
  readonly customText?: string;
  readonly globalStoreSetting?: Inline1176;
  readonly sku?: string;
  readonly state: string;
}

export interface SponsoredProductsCreateProductTarget {
  readonly bid?: number;
  readonly matchType: string;
  readonly target: string;
}

export interface SponsoredProductsCreateSponsoredProductsAdGroupsRequestContent {
  readonly adGroups: ReadonlyArray<Inline1179>;
}

export interface SponsoredProductsCreateSponsoredProductsAdGroupsResponseContent {
  readonly adGroups: Inline1181;
}

export interface SponsoredProductsCreateSponsoredProductsCampaignNegativeKeywordsRequestContent {
  readonly campaignNegativeKeywords: ReadonlyArray<Inline1197>;
}

export interface SponsoredProductsCreateSponsoredProductsCampaignNegativeKeywordsResponseContent {
  readonly campaignNegativeKeywords: Inline1199;
}

export interface SponsoredProductsCreateSponsoredProductsCampaignNegativeTargetingClausesRequestContent {
  readonly campaignNegativeTargetingClauses: ReadonlyArray<Inline1213>;
}

export interface SponsoredProductsCreateSponsoredProductsCampaignNegativeTargetingClausesResponseContent {
  readonly campaignNegativeTargetingClauses: Inline1215;
}

export interface SponsoredProductsCreateSponsoredProductsCampaignsRequestContent {
  readonly campaigns: ReadonlyArray<Inline1232>;
}

export interface SponsoredProductsCreateSponsoredProductsCampaignsResponseContent {
  readonly campaigns: Inline1238;
}

export interface SponsoredProductsCreateSponsoredProductsKeywordsRequestContent {
  readonly keywords: ReadonlyArray<Inline1261>;
}

export interface SponsoredProductsCreateSponsoredProductsKeywordsResponseContent {
  readonly keywords: Inline1263;
}

export interface SponsoredProductsCreateSponsoredProductsNegativeKeywordsRequestContent {
  readonly negativeKeywords: ReadonlyArray<Inline1280>;
}

export interface SponsoredProductsCreateSponsoredProductsNegativeKeywordsResponseContent {
  readonly negativeKeywords: Inline1282;
}

export interface SponsoredProductsCreateSponsoredProductsNegativeTargetingClausesRequestContent {
  readonly negativeTargetingClauses: ReadonlyArray<Inline1297>;
}

export interface SponsoredProductsCreateSponsoredProductsNegativeTargetingClausesResponseContent {
  readonly negativeTargetingClauses: Inline1299;
}

export interface SponsoredProductsCreateSponsoredProductsProductAdsRequestContent {
  readonly productAds: ReadonlyArray<Inline1316>;
}

export interface SponsoredProductsCreateSponsoredProductsProductAdsResponseContent {
  readonly productAds: Inline1318;
}

export interface SponsoredProductsCreateSponsoredProductsTargetingClausesRequestContent {
  readonly targetingClauses: ReadonlyArray<Inline1337>;
}

export interface SponsoredProductsCreateSponsoredProductsTargetingClausesResponseContent {
  readonly targetingClauses: Inline1339;
}

export interface SponsoredProductsCreateTarget {
  readonly manualTargetingAdGroupId?: string;
  readonly targetId?: string;
  readonly targetPromotionGroupId?: string;
}

export interface SponsoredProductsCreateTargetError {
  readonly errorType?: string;
  readonly errorValue?: Inline1359 | Inline1360 | Inline1361 | Inline1362 | Inline1363 | Inline1364 | Inline1365 | Inline1366 | Inline1367 | Inline1368 | Inline1369 | Inline1370 | Inline1371 | Inline1372 | Inline1373 | Inline1374 | Inline1375;
}

export type SponsoredProductsCreateTargetErrorSelector = Inline1377 | Inline1378 | Inline1379 | Inline1380 | Inline1381 | Inline1382 | Inline1383 | Inline1384 | Inline1385 | Inline1386 | Inline1387 | Inline1388 | Inline1389 | Inline1390 | Inline1391 | Inline1392 | Inline1393;

export interface SponsoredProductsCreateTargetingClause {
  readonly adGroupId: string;
  readonly bid?: number;
  readonly campaignId: string;
  readonly expression: ReadonlyArray<Inline1395>;
  readonly expressionType: string;
  readonly state: string;
}

export interface SponsoredProductsCreateTargetingExpressionPredicate {
  readonly type: string;
  readonly value?: string;
}

export type SponsoredProductsCreateTargetingExpressionPredicateType = "ASIN_AGE_RANGE_SAME_AS" | "ASIN_BRAND_SAME_AS" | "ASIN_CATEGORY_SAME_AS" | "ASIN_EXPANDED_FROM" | "ASIN_GENRE_SAME_AS" | "ASIN_IS_PRIME_SHIPPING_ELIGIBLE" | "ASIN_PRICE_BETWEEN" | "ASIN_PRICE_GREATER_THAN" | "ASIN_PRICE_LESS_THAN" | "ASIN_REVIEW_RATING_BETWEEN" | "ASIN_REVIEW_RATING_GREATER_THAN" | "ASIN_REVIEW_RATING_LESS_THAN" | "ASIN_SAME_AS" | "KEYWORD_GROUP_SAME_AS" | string;

export interface SponsoredProductsCreateTargetPromotionGroupsRequestContent {
  readonly adGroupId: string;
  readonly adIds?: ReadonlyArray<string>;
  readonly existingCampaignDetails?: Inline1399;
  readonly newCampaignDetails?: Inline1400;
}

export interface SponsoredProductsCreateTargetPromotionGroupsResponseContent {
  readonly targetPromotionGroup?: Inline1404;
}

export interface SponsoredProductsCreateTargetPromotionGroupsV2RequestContent {
  readonly adGroupId: string;
  readonly adIds?: ReadonlyArray<string>;
  readonly existingCampaignDetails?: ReadonlyArray<Inline1406>;
  readonly newCampaignDetails?: ReadonlyArray<Inline1407>;
  readonly targetPromotionGroupName: string;
}

export interface SponsoredProductsCreateTargetPromotionGroupsV2ResponseContent {
  readonly targetPromotionGroup?: Inline1412;
}

export interface SponsoredProductsCreateTargetPromotionGroupTargetsBatchError {
  readonly index?: string;
  readonly subErrors?: ReadonlyArray<Inline1414>;
}

export interface SponsoredProductsCreateTargetPromotionGroupTargetsBatchSuccess {
  readonly index?: string;
  readonly targetDetails?: Inline1416 | Inline1417;
}

export interface SponsoredProductsCreateTargetPromotionGroupTargetsFailureResponseItem {
  readonly errors?: ReadonlyArray<Inline1419>;
  readonly expressionType?: string;
  readonly target?: string;
}

export interface SponsoredProductsCreateTargetPromotionGroupTargetsRequestContent {
  readonly targetPromotionGroupId: string;
  readonly targets?: ReadonlyArray<Inline1437>;
}

export interface SponsoredProductsCreateTargetPromotionGroupTargetsResponseContent {
  readonly errors?: ReadonlyArray<Inline1439>;
  readonly success?: ReadonlyArray<Inline1456>;
}

export interface SponsoredProductsCreateTargetPromotionGroupTargetsSuccessResponseItem {
  readonly expressionType?: string;
  readonly target?: string;
  readonly targetDetails?: Inline1458;
}

export interface SponsoredProductsCreateTargetPromotionGroupTargetsV2RequestContent {
  readonly targetPromotionGroupId: string;
  readonly targets?: ReadonlyArray<Inline1460 | Inline1461>;
}

export interface SponsoredProductsCreateTargetPromotionGroupTargetsV2ResponseContent {
  readonly error?: ReadonlyArray<Inline1463>;
  readonly success?: ReadonlyArray<Inline1464>;
}

export interface SponsoredProductsCreateTargetRequest {
  readonly bid?: number;
  readonly expressionType: string;
  readonly target: string;
}

export type SponsoredProductsCreateTargetRequestV2 = Inline1468 | Inline1469;

export interface SponsoredProductsCurrencyError {
  readonly cause?: Inline1471;
  readonly message: string;
  readonly reason: string;
}

export type SponsoredProductsCurrencyErrorReason = "CANNOT_UPDATE_CURRENCY" | "CURRENCY_NOT_MATCHING_PREFERRED_CURRENCY" | "CURRENCY_NOT_SUPPORTED" | "PREFERRED_CURRENCY_NOT_SET" | string;

export interface SponsoredProductsDateError {
  readonly cause?: Inline1474;
  readonly message: string;
  readonly reason: string;
}

export type SponsoredProductsDateErrorReason = "END_DATE_EARLIER_THAN_TODAY" | "END_DATE_LATER_THAN_MAXIMUM" | "INVALID_DATE" | "START_DATE_AFTER_END_DATE" | "START_DATE_EARLIER_THAN_TODAY" | "START_DATE_LATER_THAN_MAXIMUM" | "UPDATING_ENDED_CAMPAIGN_WITHOUT_EXTENSION" | "UPDATING_READ_ONLY_END_DATE" | "UPDATING_READ_ONLY_START_DATE" | string;

export interface SponsoredProductsDeleteSponsoredProductsAdGroupsRequestContent {
  readonly adGroupIdFilter: Inline1477;
}

export interface SponsoredProductsDeleteSponsoredProductsAdGroupsResponseContent {
  readonly adGroups: Inline1479;
}

export interface SponsoredProductsDeleteSponsoredProductsCampaignNegativeKeywordsRequestContent {
  readonly campaignNegativeKeywordIdFilter: Inline1495;
}

export interface SponsoredProductsDeleteSponsoredProductsCampaignNegativeKeywordsResponseContent {
  readonly campaignNegativeKeywords: Inline1497;
}

export interface SponsoredProductsDeleteSponsoredProductsCampaignNegativeTargetingClausesRequestContent {
  readonly campaignNegativeTargetIdFilter: Inline1511;
}

export interface SponsoredProductsDeleteSponsoredProductsCampaignNegativeTargetingClausesResponseContent {
  readonly campaignNegativeTargetingClauses: Inline1513;
}

export interface SponsoredProductsDeleteSponsoredProductsCampaignsRequestContent {
  readonly campaignIdFilter: Inline1530;
}

export interface SponsoredProductsDeleteSponsoredProductsCampaignsResponseContent {
  readonly campaigns: Inline1532;
}

export interface SponsoredProductsDeleteSponsoredProductsKeywordsRequestContent {
  readonly keywordIdFilter: Inline1555;
}

export interface SponsoredProductsDeleteSponsoredProductsKeywordsResponseContent {
  readonly keywords: Inline1557;
}

export interface SponsoredProductsDeleteSponsoredProductsNegativeKeywordsRequestContent {
  readonly negativeKeywordIdFilter: Inline1574;
}

export interface SponsoredProductsDeleteSponsoredProductsNegativeKeywordsResponseContent {
  readonly negativeKeywords: Inline1576;
}

export interface SponsoredProductsDeleteSponsoredProductsNegativeTargetingClausesRequestContent {
  readonly negativeTargetIdFilter: Inline1591;
}

export interface SponsoredProductsDeleteSponsoredProductsNegativeTargetingClausesResponseContent {
  readonly negativeTargetingClauses: Inline1593;
}

export interface SponsoredProductsDeleteSponsoredProductsProductAdsRequestContent {
  readonly adIdFilter: Inline1610;
}

export interface SponsoredProductsDeleteSponsoredProductsProductAdsResponseContent {
  readonly productAds: Inline1612;
}

export interface SponsoredProductsDeleteSponsoredProductsTargetingClausesRequestContent {
  readonly targetIdFilter: Inline1631;
}

export interface SponsoredProductsDeleteSponsoredProductsTargetingClausesResponseContent {
  readonly targetingClauses: Inline1633;
}

export interface SponsoredProductsDuplicateValueError {
  readonly cause?: Inline1652;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export type SponsoredProductsDuplicateValueErrorReason = "DUPLICATE_VALUE" | "MARKETPLACE_ATTRIBUTES_REPEATED" | "NAME_NOT_UNIQUE" | string;

export interface SponsoredProductsDynamicBidding {
  readonly placementBidding?: ReadonlyArray<Inline1655>;
  readonly shopperCohortBidding?: ReadonlyArray<Inline1656>;
  readonly strategy: string;
}

export interface SponsoredProductsEntityNotFoundError {
  readonly cause?: Inline1658;
  readonly entityId: string;
  readonly entityType: string;
  readonly message: string;
  readonly reason: string;
}

export type SponsoredProductsEntityNotFoundErrorReason = "ENTITY_NOT_FOUND" | string;

export interface SponsoredProductsEntityQuotaError {
  readonly cause?: Inline1661;
  readonly entityType: string;
  readonly message: string;
  readonly quota?: string;
  readonly quotaScope?: string;
  readonly reason: string;
}

export type SponsoredProductsEntityState = "ARCHIVED" | "ENABLED" | "ENABLING" | "OTHER" | "PAUSED" | "PROPOSED" | "USER_DELETED" | string;

export interface SponsoredProductsEntityStateError {
  readonly cause?: Inline1664;
  readonly entityType: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export type SponsoredProductsEntityStateErrorReason = "ARCHIVED_ENTITY_CANNOT_BE_MODIFIED" | "AUTO_TARGETING_CLAUSE_CANNOT_BE_ARCHIVED_MANUALLY" | "INVALID_STATE_TRANSITION" | "INVALID_TARGET_STATE" | "MARKETPLACE_STATE_CANNOT_BE_ARCHIVED" | "PARENT_ARCHIVED_FORBIDS_UPDATES" | "PARENT_ENTITY_FORBIDS_CREATION" | "PARENT_STATUS_FORBIDS_UPDATES_AND_CREATES" | string;

export interface SponsoredProductsEntityStateFilter {
  readonly include: ReadonlyArray<string>;
}

export type SponsoredProductsEntityType = "AD_GROUP" | "CAMPAIGN" | "CAMPAIGN_NEGATIVE_KEYWORD" | "CAMPAIGN_NEGATIVE_TARGETING_CLAUSE" | "KEYWORD" | "NEGATIVE_KEYWORD" | "NEGATIVE_TARGETING_CLAUSE" | "PRODUCT_AD" | "TARGETING_CLAUSE" | string;

export interface SponsoredProductsError {
  readonly errorCode?: string;
  readonly errorMessage?: string;
}

export interface SponsoredProductsErrorCause {
  readonly location: string;
  readonly trigger?: string;
}

export interface SponsoredProductsExistingAdGroup {
  readonly adGroupId: string;
}

export interface SponsoredProductsExistingCampaignDetails {
  readonly keywordCampaignAdGroupIds?: ReadonlyArray<string>;
  readonly productCampaignAdGroupIds?: ReadonlyArray<string>;
}

export type SponsoredProductsExpressionType = "AUTO" | "MANUAL" | "OTHER" | string;

export interface SponsoredProductsExpressionTypeError {
  readonly cause?: Inline1674;
  readonly message: string;
  readonly reason: string;
}

export type SponsoredProductsExpressionTypeErrorReason = "UNSUPPORTED_EXPRESSION_TYPE" | string;

export interface SponsoredProductsExpressionTypeFilter {
  readonly include: ReadonlyArray<string>;
}

export type SponsoredProductsExpressionTypeWithoutOther = "AUTO" | "MANUAL" | string;

export interface SponsoredProductsGetTargetPromotionGroupsRecommendationsRequestContent {
  readonly adGroupIdFilter?: Inline1679;
  readonly adIdFilter?: Inline1680;
  readonly campaignIdFilter?: Inline1681;
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface SponsoredProductsGetTargetPromotionGroupsRecommendationsResponseContent {
  readonly nextToken?: string;
  readonly targets: ReadonlyArray<Inline1683>;
  readonly totalResults: number;
}

export interface SponsoredProductsGlobalStoreSetting {
  readonly catalogSourceCountryCode?: string;
}

export type SponsoredProductsInternalErrorErrorCode = "INTERNAL_ERROR" | string;

export interface SponsoredProductsInternalServerError {
  readonly cause?: Inline1687;
  readonly message: string;
  readonly reason: string;
}

export type SponsoredProductsInternalServerErrorCode = "INTERNAL_SERVER_EXCEPTION" | string;

export type SponsoredProductsInternalServerErrorReason = "INTERNAL_ERROR" | string;

export type SponsoredProductsInternalServerExceptionCode = "INTERNAL_SERVER_EXCEPTION" | string;

export interface SponsoredProductsInternalServerExceptionResponseContent {
  readonly code: string;
  readonly message: string;
}

export type SponsoredProductsInvalidArgumentErrorCode = "INVALID_ARGUMENT" | string;

export interface SponsoredProductsInvalidInputError {
  readonly cause?: Inline1694;
  readonly message: string;
  readonly reason: string;
}

export type SponsoredProductsInvalidInputErrorReason = "INVALID_TOKEN" | string;

export interface SponsoredProductsKeyword {
  readonly adGroupId: string;
  readonly bid?: number;
  readonly campaignId: string;
  readonly extendedData?: Inline1697;
  readonly globalKeywordId?: string;
  readonly keywordId: string;
  readonly keywordText: string;
  readonly matchType: string;
  readonly nativeLanguageKeyword?: string;
  readonly nativeLanguageLocale?: string;
  readonly state: string;
}

export interface SponsoredProductsKeywordAccessError {
  readonly errorType: string;
  readonly errorValue: Inline1699;
}

export interface SponsoredProductsKeywordAccessErrorSelector {
  readonly entityNotFoundError?: Inline1709;
  readonly internalServerError?: Inline1710;
  readonly invalidInputError?: Inline1711;
  readonly localeError?: Inline1712;
  readonly malformedValueError?: Inline1713;
  readonly missingValueError?: Inline1714;
  readonly otherError?: Inline1715;
  readonly rangeError?: Inline1716;
  readonly throttledError?: Inline1717;
}

export interface SponsoredProductsKeywordAccessExceptionResponseContent {
  readonly code: string;
  readonly errors?: ReadonlyArray<Inline1719>;
  readonly message: string;
}

export interface SponsoredProductsKeywordExtendedData {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline1729>;
}

export interface SponsoredProductsKeywordFailureResponseItem {
  readonly errors?: ReadonlyArray<Inline1731>;
  readonly index: number;
}

export type SponsoredProductsKeywordMatchType = "BROAD" | "EXACT" | "PHRASE" | string;

export interface SponsoredProductsKeywordMutationError {
  readonly errorType: string;
  readonly errorValue: Inline1748;
}

export interface SponsoredProductsKeywordMutationErrorSelector {
  readonly biddingError?: Inline1764;
  readonly billingError?: Inline1765;
  readonly duplicateValueError?: Inline1766;
  readonly entityNotFoundError?: Inline1767;
  readonly entityQuotaError?: Inline1768;
  readonly entityStateError?: Inline1769;
  readonly internalServerError?: Inline1770;
  readonly localeError?: Inline1771;
  readonly malformedValueError?: Inline1772;
  readonly missingValueError?: Inline1773;
  readonly otherError?: Inline1774;
  readonly parentEntityError?: Inline1775;
  readonly rangeError?: Inline1776;
  readonly targetingClauseSetupError?: Inline1777;
  readonly throttledError?: Inline1778;
}

export interface SponsoredProductsKeywordMutationExceptionResponseContent {
  readonly code: string;
  readonly errors?: ReadonlyArray<Inline1780>;
  readonly message: string;
}

export type SponsoredProductsKeywordServingStatus = "ACCOUNT_OUT_OF_BUDGET" | "ADVERTISER_ARCHIVED" | "ADVERTISER_EXCEED_SPENDS_LIMIT" | "ADVERTISER_OUT_OF_BUDGET" | "ADVERTISER_PAUSED" | "ADVERTISER_PAYMENT_FAILURE" | "ADVERTISER_POLICING_PENDING_REVIEW" | "ADVERTISER_POLICING_SUSPENDED" | "AD_GROUP_ARCHIVED" | "AD_GROUP_INCOMPLETE" | "AD_GROUP_LOW_BID" | "AD_GROUP_PAUSED" | "AD_GROUP_POLICING_CREATIVE_REJECTED" | "AD_GROUP_POLICING_PENDING_REVIEW" | "AD_GROUP_STATUS_ENABLED" | "CAMPAIGN_ARCHIVED" | "CAMPAIGN_INCOMPLETE" | "CAMPAIGN_OUT_OF_BUDGET" | "CAMPAIGN_PAUSED" | "CAMPAIGN_STATUS_ENABLED" | "ENDED" | "OTHER" | "PENDING_REVIEW" | "PENDING_START_DATE" | "PORTFOLIO_ARCHIVED" | "PORTFOLIO_ENDED" | "PORTFOLIO_OUT_OF_BUDGET" | "PORTFOLIO_PAUSED" | "PORTFOLIO_PENDING_START_DATE" | "PORTFOLIO_STATUS_ENABLED" | "REJECTED" | "TARGETING_CLAUSE_ARCHIVED" | "TARGETING_CLAUSE_BLOCKED" | "TARGETING_CLAUSE_PAUSED" | "TARGETING_CLAUSE_POLICING_SUSPENDED" | "TARGETING_CLAUSE_STATUS_LIVE" | string;

export interface SponsoredProductsKeywordServingStatusDetail {
  readonly helpUrl?: string;
  readonly message?: string;
  readonly name?: string;
}

export type SponsoredProductsKeywordServingStatusReason = "ACCOUNT_OUT_OF_BUDGET_DETAIL" | "ADVERTISER_ARCHIVED_DETAIL" | "ADVERTISER_EXCEED_SPENDS_LIMIT_DETAIL" | "ADVERTISER_OUT_OF_BUDGET_DETAIL" | "ADVERTISER_PAUSED_DETAIL" | "ADVERTISER_PAYMENT_FAILURE_DETAIL" | "ADVERTISER_POLICING_PENDING_REVIEW_DETAIL" | "ADVERTISER_POLICING_SUSPENDED_DETAIL" | "AD_GROUP_ARCHIVED_DETAIL" | "AD_GROUP_INCOMPLETE_DETAIL" | "AD_GROUP_LOW_BID_DETAIL" | "AD_GROUP_PAUSED_DETAIL" | "AD_GROUP_POLICING_CREATIVE_REJECTED_DETAIL" | "AD_GROUP_POLICING_PENDING_REVIEW_DETAIL" | "AD_GROUP_STATUS_ENABLED_DETAIL" | "CAMPAIGN_ARCHIVED_DETAIL" | "CAMPAIGN_INCOMPLETE_DETAIL" | "CAMPAIGN_OUT_OF_BUDGET_DETAIL" | "CAMPAIGN_PAUSED_DETAIL" | "CAMPAIGN_STATUS_ENABLED_DETAIL" | "ENDED_DETAIL" | "OTHER" | "PENDING_REVIEW_DETAIL" | "PENDING_START_DATE_DETAIL" | "PORTFOLIO_ARCHIVED_DETAIL" | "PORTFOLIO_ENDED_DETAIL" | "PORTFOLIO_OUT_OF_BUDGET_DETAIL" | "PORTFOLIO_PAUSED_DETAIL" | "PORTFOLIO_PENDING_START_DATE_DETAIL" | "PORTFOLIO_STATUS_ENABLED_DETAIL" | "REJECTED_DETAIL" | "TARGETING_CLAUSE_ARCHIVED_DETAIL" | "TARGETING_CLAUSE_BLOCKED_DETAIL" | "TARGETING_CLAUSE_PAUSED_DETAIL" | "TARGETING_CLAUSE_POLICING_SUSPENDED_DETAIL" | "TARGETING_CLAUSE_STATUS_LIVE_DETAIL" | string;

export interface SponsoredProductsKeywordSuccessResponseItem {
  readonly index: number;
  readonly keyword?: Inline1799;
  readonly keywordId?: string;
}

export interface SponsoredProductsKeywordTargetV2 {
  readonly destinationAdGroupId?: string;
  readonly keywordId?: string;
  readonly keywordText?: string;
  readonly matchType?: string;
  readonly targetPromotionGroupId?: string;
}

export interface SponsoredProductsKeywordTextFilter {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType: string;
}

export interface SponsoredProductsListSponsoredProductsAdGroupsRequestContent {
  readonly adGroupIdFilter?: Inline1803;
  readonly campaignIdFilter?: Inline1804;
  readonly campaignTargetingTypeFilter?: string;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly nameFilter?: Inline1805;
  readonly nextToken?: string;
  readonly stateFilter?: Inline1806;
}

export interface SponsoredProductsListSponsoredProductsAdGroupsResponseContent {
  readonly adGroups?: ReadonlyArray<Inline1808>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}

export interface SponsoredProductsListSponsoredProductsCampaignNegativeKeywordsRequestContent {
  readonly campaignIdFilter?: Inline1810;
  readonly campaignNegativeKeywordIdFilter?: Inline1811;
  readonly campaignNegativeKeywordTextFilter?: Inline1812;
  readonly includeExtendedDataFields?: boolean;
  readonly matchTypeFilter?: ReadonlyArray<string>;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly stateFilter?: Inline1813;
}

export interface SponsoredProductsListSponsoredProductsCampaignNegativeKeywordsResponseContent {
  readonly campaignNegativeKeywords?: ReadonlyArray<Inline1815>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}

export interface SponsoredProductsListSponsoredProductsCampaignNegativeTargetingClausesRequestContent {
  readonly asinFilter?: Inline1817;
  readonly campaignIdFilter?: Inline1818;
  readonly campaignNegativeTargetIdFilter?: Inline1819;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly stateFilter?: Inline1820;
}

export interface SponsoredProductsListSponsoredProductsCampaignNegativeTargetingClausesResponseContent {
  readonly campaignNegativeTargetingClauses?: ReadonlyArray<Inline1822>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}

export interface SponsoredProductsListSponsoredProductsCampaignsRequestContent {
  readonly campaignIdFilter?: Inline1826;
  readonly includeExtendedDataFields?: boolean;
  readonly marketplaceBudgetAllocationFilter?: Inline1827;
  readonly maxResults?: number;
  readonly nameFilter?: Inline1828;
  readonly nextToken?: string;
  readonly portfolioIdFilter?: Inline1829;
  readonly stateFilter?: Inline1830;
}

export interface SponsoredProductsListSponsoredProductsCampaignsResponseContent {
  readonly campaigns?: ReadonlyArray<Inline1832>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}

export interface SponsoredProductsListSponsoredProductsKeywordsRequestContent {
  readonly adGroupIdFilter?: Inline1839;
  readonly campaignIdFilter?: Inline1840;
  readonly includeExtendedDataFields?: boolean;
  readonly keywordIdFilter?: Inline1841;
  readonly keywordTextFilter?: Inline1842;
  readonly locale?: string;
  readonly matchTypeFilter?: ReadonlyArray<string>;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly stateFilter?: Inline1843;
}

export interface SponsoredProductsListSponsoredProductsKeywordsResponseContent {
  readonly keywords?: ReadonlyArray<Inline1845>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}

export interface SponsoredProductsListSponsoredProductsNegativeKeywordsRequestContent {
  readonly adGroupIdFilter?: Inline1847;
  readonly campaignIdFilter?: Inline1848;
  readonly includeExtendedDataFields?: boolean;
  readonly locale?: string;
  readonly matchTypeFilter?: ReadonlyArray<string>;
  readonly maxResults?: number;
  readonly negativeKeywordIdFilter?: Inline1849;
  readonly negativeKeywordTextFilter?: Inline1850;
  readonly nextToken?: string;
  readonly stateFilter?: Inline1851;
}

export interface SponsoredProductsListSponsoredProductsNegativeKeywordsResponseContent {
  readonly negativeKeywords?: ReadonlyArray<Inline1853>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}

export interface SponsoredProductsListSponsoredProductsNegativeTargetingClausesRequestContent {
  readonly adGroupIdFilter?: Inline1855;
  readonly asinFilter?: Inline1856;
  readonly campaignIdFilter?: Inline1857;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly negativeTargetIdFilter?: Inline1858;
  readonly nextToken?: string;
  readonly stateFilter?: Inline1859;
}

export interface SponsoredProductsListSponsoredProductsNegativeTargetingClausesResponseContent {
  readonly negativeTargetingClauses?: ReadonlyArray<Inline1861>;
  readonly nextToken?: string;
  readonly totalResults?: number;
}

export interface SponsoredProductsListSponsoredProductsProductAdsRequestContent {
  readonly adGroupIdFilter?: Inline1865;
  readonly adIdFilter?: Inline1866;
  readonly campaignIdFilter?: Inline1867;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly stateFilter?: Inline1868;
}

export interface SponsoredProductsListSponsoredProductsProductAdsResponseContent {
  readonly nextToken?: string;
  readonly productAds?: ReadonlyArray<Inline1870>;
  readonly totalResults?: number;
}

export interface SponsoredProductsListSponsoredProductsTargetingClausesRequestContent {
  readonly adGroupIdFilter?: Inline1873;
  readonly asinFilter?: Inline1874;
  readonly campaignIdFilter?: Inline1875;
  readonly expressionTypeFilter?: Inline1876;
  readonly includeExtendedDataFields?: boolean;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly stateFilter?: Inline1877;
  readonly targetIdFilter?: Inline1878;
}

export interface SponsoredProductsListSponsoredProductsTargetingClausesResponseContent {
  readonly nextToken?: string;
  readonly targetingClauses?: ReadonlyArray<Inline1880>;
  readonly totalResults?: number;
}

export interface SponsoredProductsListTargetPromotionGroupsRequestContent {
  readonly adGroupIdFilter?: Inline1884;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly targetPromotionGroupIdFilter?: Inline1885;
}

export interface SponsoredProductsListTargetPromotionGroupsResponseContent {
  readonly nextToken?: string;
  readonly targetPromotionGroups?: ReadonlyArray<Inline1887>;
  readonly totalResults?: number;
}

export interface SponsoredProductsListTargetPromotionGroupsV2RequestContent {
  readonly destinationAdGroupIdFilter?: Inline1889;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly sourceAdGroupIdFilter?: Inline1890;
  readonly targetPromotionGroupIdFilter?: Inline1891;
}

export interface SponsoredProductsListTargetPromotionGroupsV2ResponseContent {
  readonly nextToken?: string;
  readonly targetPromotionGroups?: ReadonlyArray<Inline1893>;
  readonly totalResults?: number;
}

export interface SponsoredProductsListTargetPromotionGroupTargetsRequestContent {
  readonly adGroupIdFilter?: Inline1895;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly targetPromotionGroupIdFilter?: Inline1896;
}

export interface SponsoredProductsListTargetPromotionGroupTargetsResponseContent {
  readonly nextToken?: string;
  readonly targets?: ReadonlyArray<Inline1898>;
  readonly totalResults?: number;
}

export interface SponsoredProductsListTargetPromotionGroupTargetsV2RequestContent {
  readonly adGroupIdFilter?: Inline1900;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly targetPromotionGroupIdFilter?: Inline1901;
}

export interface SponsoredProductsListTargetPromotionGroupTargetsV2ResponseContent {
  readonly nextToken?: string;
  readonly targets?: ReadonlyArray<Inline1903 | Inline1904>;
  readonly totalResults?: number;
}

export interface SponsoredProductsLocaleError {
  readonly cause?: Inline1906;
  readonly message: string;
  readonly reason: string;
}

export type SponsoredProductsLocaleErrorReason = "INVALID_LOCALE" | string;

export interface SponsoredProductsMalformedValueError {
  readonly cause?: Inline1909;
  readonly fragment?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export type SponsoredProductsMalformedValueErrorReason = "BLANK" | "FORBIDDEN_CHARS" | "LEADING_OR_TRAILING_WHITESPACE" | "PATTERN_NOT_MATCHED" | "TOO_LONG" | "TOO_SHORT" | string;

export type SponsoredProductsMarketplace = "AE" | "AU" | "BR" | "CA" | "DE" | "EG" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "NL" | "PL" | "SA" | "SE" | "SG" | "TR" | "UK" | "US" | string;

export type SponsoredProductsMarketplaceBudgetAllocation = "AUTO" | "MANUAL" | string;

export interface SponsoredProductsMarketplaceBudgetAllocationFilter {
  readonly include: ReadonlyArray<string>;
}

export type SponsoredProductsMatchType = "BROAD" | "EXACT" | "OTHER" | "PHRASE" | string;

export interface SponsoredProductsMissingValueError {
  readonly cause?: Inline1916;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export type SponsoredProductsMissingValueErrorReason = "MISSING_VALUE" | string;

export interface SponsoredProductsNameFilter {
  readonly include?: ReadonlyArray<string>;
  readonly queryTermMatchType?: string;
}

export interface SponsoredProductsNegativeKeyword {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly extendedData?: Inline1920;
  readonly globalKeywordId?: string;
  readonly keywordId: string;
  readonly keywordText: string;
  readonly matchType: string;
  readonly nativeLanguageKeyword?: string;
  readonly nativeLanguageLocale?: string;
  readonly state: string;
}

export interface SponsoredProductsNegativeKeywordAccessError {
  readonly errorType: string;
  readonly errorValue: Inline1922;
}

export interface SponsoredProductsNegativeKeywordAccessErrorSelector {
  readonly entityNotFoundError?: Inline1931;
  readonly internalServerError?: Inline1932;
  readonly invalidInputError?: Inline1933;
  readonly malformedValueError?: Inline1934;
  readonly missingValueError?: Inline1935;
  readonly otherError?: Inline1936;
  readonly rangeError?: Inline1937;
  readonly throttledError?: Inline1938;
}

export interface SponsoredProductsNegativeKeywordAccessExceptionResponseContent {
  readonly code: string;
  readonly errors?: ReadonlyArray<Inline1940>;
  readonly message: string;
}

export interface SponsoredProductsNegativeKeywordExtendedData {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline1949>;
}

export interface SponsoredProductsNegativeKeywordFailureResponseItem {
  readonly errors?: ReadonlyArray<Inline1951>;
  readonly index: number;
}

export interface SponsoredProductsNegativeKeywordMutationError {
  readonly errorType: string;
  readonly errorValue: Inline1965;
}

export interface SponsoredProductsNegativeKeywordMutationErrorSelector {
  readonly billingError?: Inline1979;
  readonly duplicateValueError?: Inline1980;
  readonly entityNotFoundError?: Inline1981;
  readonly entityQuotaError?: Inline1982;
  readonly entityStateError?: Inline1983;
  readonly internalServerError?: Inline1984;
  readonly malformedValueError?: Inline1985;
  readonly missingValueError?: Inline1986;
  readonly otherError?: Inline1987;
  readonly parentEntityError?: Inline1988;
  readonly rangeError?: Inline1989;
  readonly targetingClauseSetupError?: Inline1990;
  readonly throttledError?: Inline1991;
}

export interface SponsoredProductsNegativeKeywordMutationExceptionResponseContent {
  readonly code: string;
  readonly errors?: ReadonlyArray<Inline1993>;
  readonly message: string;
}

export interface SponsoredProductsNegativeKeywordSuccessResponseItem {
  readonly index: number;
  readonly negativeKeyword?: Inline2007;
  readonly negativeKeywordId?: string;
}

export type SponsoredProductsNegativeMatchType = "NEGATIVE_BROAD" | "NEGATIVE_EXACT" | "NEGATIVE_PHRASE" | "OTHER" | string;

export interface SponsoredProductsNegativeTargetAccessError {
  readonly errorType: string;
  readonly errorValue: Inline2010;
}

export interface SponsoredProductsNegativeTargetAccessErrorSelector {
  readonly entityNotFoundError?: Inline2019;
  readonly internalServerError?: Inline2020;
  readonly invalidInputError?: Inline2021;
  readonly malformedValueError?: Inline2022;
  readonly missingValueError?: Inline2023;
  readonly otherError?: Inline2024;
  readonly rangeError?: Inline2025;
  readonly throttledError?: Inline2026;
}

export interface SponsoredProductsNegativeTargetAccessExceptionResponseContent {
  readonly code: string;
  readonly errors?: ReadonlyArray<Inline2028>;
  readonly message: string;
}

export interface SponsoredProductsNegativeTargetingClause {
  readonly adGroupId: string;
  readonly campaignId: string;
  readonly expression: ReadonlyArray<Inline2037>;
  readonly extendedData?: Inline2038;
  readonly globalTargetId?: string;
  readonly resolvedExpression: ReadonlyArray<Inline2039>;
  readonly state: string;
  readonly targetId: string;
}

export interface SponsoredProductsNegativeTargetingClauseExtendedData {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline2041>;
}

export interface SponsoredProductsNegativeTargetingClauseFailureResponseItem {
  readonly errors?: ReadonlyArray<Inline2043>;
  readonly index: number;
}

export interface SponsoredProductsNegativeTargetingClauseSuccessResponseItem {
  readonly index: number;
  readonly negativeTargetingClause?: Inline2057;
  readonly targetId?: string;
}

export interface SponsoredProductsNegativeTargetingExpressionPredicate {
  readonly type?: string;
  readonly value?: string;
}

export type SponsoredProductsNegativeTargetingExpressionPredicateType = "ASIN_BRAND_SAME_AS" | "ASIN_SAME_AS" | "OTHER" | string;

export interface SponsoredProductsNegativeTargetMutationError {
  readonly errorType: string;
  readonly errorValue: Inline2063;
}

export interface SponsoredProductsNegativeTargetMutationErrorSelector {
  readonly billingError?: Inline2077;
  readonly duplicateValueError?: Inline2078;
  readonly entityNotFoundError?: Inline2079;
  readonly entityQuotaError?: Inline2080;
  readonly entityStateError?: Inline2081;
  readonly internalServerError?: Inline2082;
  readonly malformedValueError?: Inline2083;
  readonly missingValueError?: Inline2084;
  readonly otherError?: Inline2085;
  readonly parentEntityError?: Inline2086;
  readonly rangeError?: Inline2087;
  readonly targetingClauseSetupError?: Inline2088;
  readonly throttledError?: Inline2089;
}

export interface SponsoredProductsNegativeTargetMutationExceptionResponseContent {
  readonly code: string;
  readonly errors?: ReadonlyArray<Inline2091>;
  readonly message: string;
}

export interface SponsoredProductsNewAdGroup {
  readonly adGroupName: string;
  readonly defaultBid: number;
  readonly targetingTypes: ReadonlyArray<string>;
}

export interface SponsoredProductsNewCampaign {
  readonly adGroups: ReadonlyArray<Inline2106>;
  readonly budget: Inline2107;
  readonly campaignName: string;
  readonly dynamicBidding?: Inline2108;
  readonly endDate?: string;
  readonly startDate?: string;
  readonly tags?: Inline2109;
}

export interface SponsoredProductsNewCampaignBudget {
  readonly budget: number;
  readonly budgetType: string;
}

export interface SponsoredProductsNewCampaignDetails {
  readonly budget: Inline2112;
  readonly defaultBid: number;
  readonly dynamicBidding?: Inline2113;
  readonly endDate?: string;
  readonly namePrefix: string;
  readonly startDate?: string;
  readonly tags?: Inline2114;
}

export interface SponsoredProductsNewCampaignDynamicBidding {
  readonly placementBidding?: ReadonlyArray<Inline2116>;
  readonly strategy: string;
}

export interface SponsoredProductsNewCampaignPlacementBidding {
  readonly percentage: number;
  readonly placement: string;
}

export type SponsoredProductsNotImplementedExceptionCode = "NOT_IMPLEMENTED" | string;

export interface SponsoredProductsNotImplementedExceptionResponseContent {
  readonly code?: string;
  readonly message?: string;
}

export interface SponsoredProductsObjectIdFilter {
  readonly include: ReadonlyArray<string>;
}

export type SponsoredProductsOffAmazonBudgetControlStrategy = "MAXIMIZE_REACH" | "MINIMIZE_SPEND" | string;

export interface SponsoredProductsOffAmazonSettings {
  readonly offAmazonBudgetControlStrategy?: string;
}

export interface SponsoredProductsOtherError {
  readonly cause?: Inline2124;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export type SponsoredProductsOtherErrorReason = "OTHER_ERROR" | string;

export interface SponsoredProductsParentEntityError {
  readonly cause?: Inline2127;
  readonly message: string;
  readonly reason: string;
}

export type SponsoredProductsParentEntityErrorReason = "PARENT_ENTITY_ARCHIVED" | "PARENT_ENTITY_DOES_NOT_TARGET_THESE_MARKETPLACES" | "PARENT_ENTITY_NOT_FOUND" | string;

export type SponsoredProductsPlacement = "PLACEMENT_PRODUCT_PAGE" | "PLACEMENT_REST_OF_SEARCH" | "PLACEMENT_TOP" | "SITE_AMAZON_BUSINESS" | string;

export interface SponsoredProductsPlacementBidding {
  readonly percentage?: number;
  readonly placement?: string;
}

export interface SponsoredProductsProductAd {
  readonly adGroupId: string;
  readonly adId: string;
  readonly asin?: string;
  readonly campaignId: string;
  readonly customText?: string;
  readonly extendedData?: Inline2132;
  readonly globalAdId?: string;
  readonly globalStoreSetting?: Inline2133;
  readonly sku?: string;
  readonly state: string;
}

export interface SponsoredProductsProductAdAccessError {
  readonly errorType: string;
  readonly errorValue: Inline2135;
}

export interface SponsoredProductsProductAdAccessErrorSelector {
  readonly entityNotFoundError?: Inline2144;
  readonly internalServerError?: Inline2145;
  readonly invalidInputError?: Inline2146;
  readonly malformedValueError?: Inline2147;
  readonly missingValueError?: Inline2148;
  readonly otherError?: Inline2149;
  readonly rangeError?: Inline2150;
  readonly throttledError?: Inline2151;
}

export interface SponsoredProductsProductAdAccessExceptionResponseContent {
  readonly code: string;
  readonly errors?: ReadonlyArray<Inline2153>;
  readonly message: string;
}

export interface SponsoredProductsProductAdExtendedData {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline2162>;
}

export interface SponsoredProductsProductAdFailureResponseItem {
  readonly errors?: ReadonlyArray<Inline2164>;
  readonly index: number;
}

export interface SponsoredProductsProductAdMutationError {
  readonly errorType: string;
  readonly errorValue: Inline2181;
}

export interface SponsoredProductsProductAdMutationErrorSelector {
  readonly adEligibilityError?: Inline2198;
  readonly asinOwnershipError?: Inline2199;
  readonly billingError?: Inline2200;
  readonly duplicateValueError?: Inline2201;
  readonly entityNotFoundError?: Inline2202;
  readonly entityQuotaError?: Inline2203;
  readonly entityStateError?: Inline2204;
  readonly internalServerError?: Inline2205;
  readonly malformedValueError?: Inline2206;
  readonly missingValueError?: Inline2207;
  readonly otherError?: Inline2208;
  readonly parentEntityError?: Inline2209;
  readonly productIdentifierError?: Inline2210;
  readonly rangeError?: Inline2211;
  readonly throttledError?: Inline2212;
  readonly unsupportedOperationError?: Inline2213;
}

export interface SponsoredProductsProductAdMutationExceptionResponseContent {
  readonly code: string;
  readonly errors?: ReadonlyArray<Inline2215>;
  readonly message: string;
}

export interface SponsoredProductsProductAdSuccessResponseItem {
  readonly adId?: string;
  readonly index: number;
  readonly productAd?: Inline2232;
}

export interface SponsoredProductsProductIdentifierError {
  readonly cause?: Inline2235;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export type SponsoredProductsProductIdentifierErrorReason = "INVALID_ASIN" | "INVALID_SKU" | string;

export interface SponsoredProductsProductTargetV2 {
  readonly destinationAdGroupId?: string;
  readonly expressionType?: string;
  readonly target?: string;
  readonly targetId?: string;
  readonly targetPromotionGroupId?: string;
}

export type SponsoredProductsQueryTermMatchType = "BROAD_MATCH" | "EXACT_MATCH" | string;

export type SponsoredProductsQuotaErrorReason = "NON_ARCHIVED_QUOTA_EXCEEDED" | "QUOTA_EXCEEDED" | string;

export type SponsoredProductsQuotaScope = "ACCOUNT" | "PARENT_ENTITY" | string;

export interface SponsoredProductsRangeError {
  readonly allowed?: ReadonlyArray<string>;
  readonly cause?: Inline2242;
  readonly lowerLimit?: string;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
  readonly upperLimit?: string;
}

export interface SponsoredProductsRecommendationReason {
  readonly data?: string;
  readonly reason?: string;
}

export interface SponsoredProductsRecommendedTarget {
  readonly adAsin?: string;
  readonly adGroupId?: string;
  readonly adId?: string;
  readonly campaignId?: string;
  readonly recommendationReasons?: ReadonlyArray<Inline2245>;
  readonly recommendedTarget?: string;
  readonly targetType?: string;
}

export interface SponsoredProductsReducedObjectIdFilter {
  readonly include: ReadonlyArray<string>;
}

export interface SponsoredProductsResponseAdGroup {
  readonly adGroupId?: string;
}

export type SponsoredProductsSchemaValidationExceptionCode = "INVALID_SCHEMA" | string;

export interface SponsoredProductsSchemaValidationExceptionResponseContent {
  readonly code: string;
  readonly message: string;
}

export type SponsoredProductsServiceUnavailableExceptionCode = "SERVICE_UNAVAILABLE" | string;

export type SponsoredProductsServiceUnavailableExceptionErrorCode = "SERVICE_UNAVAILABLE_EXCEPTION" | string;

export interface SponsoredProductsServiceUnavailableExceptionResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface SponsoredProductsShopperCohortBidding {
  readonly audienceSegments?: ReadonlyArray<Inline2254>;
  readonly percentage?: number;
  readonly shopperCohortType: string;
}

export type SponsoredProductsShopperCohortType = "AUDIENCE_SEGMENT" | string;

export type SponsoredProductsSiteRestriction = "AMAZON_BUSINESS" | "AMAZON_HAUL" | string;

export interface SponsoredProductsTags {

}

export interface SponsoredProductsTarget {
  readonly expressionType?: string;
  readonly manualTargetingAdGroupId?: string;
  readonly target?: string;
  readonly targetId?: string;
  readonly targetPromotionGroupId?: string;
}

export interface SponsoredProductsTargetAccessError {
  readonly errorType: string;
  readonly errorValue: Inline2260;
}

export interface SponsoredProductsTargetAccessErrorSelector {
  readonly entityNotFoundError?: Inline2269;
  readonly internalServerError?: Inline2270;
  readonly invalidInputError?: Inline2271;
  readonly malformedValueError?: Inline2272;
  readonly missingValueError?: Inline2273;
  readonly otherError?: Inline2274;
  readonly rangeError?: Inline2275;
  readonly throttledError?: Inline2276;
}

export interface SponsoredProductsTargetAccessExceptionResponseContent {
  readonly code: string;
  readonly errors?: ReadonlyArray<Inline2278>;
  readonly message: string;
}

export interface SponsoredProductsTargetingClause {
  readonly adGroupId: string;
  readonly bid?: number;
  readonly campaignId: string;
  readonly expression: ReadonlyArray<Inline2287>;
  readonly expressionType: string;
  readonly extendedData?: Inline2288;
  readonly globalTargetId?: string;
  readonly resolvedExpression: ReadonlyArray<Inline2289>;
  readonly state: string;
  readonly targetId: string;
}

export interface SponsoredProductsTargetingClauseExtendedData {
  readonly creationDateTime?: string;
  readonly lastUpdateDateTime?: string;
  readonly servingStatus?: string;
  readonly servingStatusDetails?: ReadonlyArray<Inline2291>;
}

export interface SponsoredProductsTargetingClauseFailureResponseItem {
  readonly errors?: ReadonlyArray<Inline2293>;
  readonly index: number;
}

export interface SponsoredProductsTargetingClauseSetupError {
  readonly cause?: Inline2309;
  readonly marketplace?: string;
  readonly message: string;
  readonly reason: string;
}

export type SponsoredProductsTargetingClauseSetupErrorReason = "AUTO_TARGETING_CLAUSE_CANNOT_BE_CREATED_MANUALLY" | "TARGETING_EXPRESSION_INVALID_VALUE" | "TARGETING_TYPE_NOT_ALLOWED_FOR_AUTO_TARGETING_CAMPAIGN" | "TYPE_CONFLICT_IN_AD_GROUP" | string;

export interface SponsoredProductsTargetingClauseSuccessResponseItem {
  readonly index: number;
  readonly targetId?: string;
  readonly targetingClause?: Inline2312;
}

export type SponsoredProductsTargetingExpressionMatchType = "PRODUCT_EXACT" | "PRODUCT_SIMILAR" | string;

export interface SponsoredProductsTargetingExpressionPredicate {
  readonly type?: string;
  readonly value?: string;
}

export type SponsoredProductsTargetingExpressionPredicateType = "ASIN_ACCESSORY_RELATED" | "ASIN_AGE_RANGE_SAME_AS" | "ASIN_BRAND_SAME_AS" | "ASIN_CATEGORY_SAME_AS" | "ASIN_EXPANDED_FROM" | "ASIN_GENRE_SAME_AS" | "ASIN_IS_PRIME_SHIPPING_ELIGIBLE" | "ASIN_PRICE_BETWEEN" | "ASIN_PRICE_GREATER_THAN" | "ASIN_PRICE_LESS_THAN" | "ASIN_REVIEW_RATING_BETWEEN" | "ASIN_REVIEW_RATING_GREATER_THAN" | "ASIN_REVIEW_RATING_LESS_THAN" | "ASIN_SAME_AS" | "ASIN_SUBSTITUTE_RELATED" | "KEYWORD_GROUP_SAME_AS" | "OTHER" | "QUERY_BROAD_REL_MATCHES" | "QUERY_HIGH_REL_MATCHES" | string;

export type SponsoredProductsTargetingExpressionPredicateTypeWithoutOther = "ASIN_ACCESSORY_RELATED" | "ASIN_AGE_RANGE_SAME_AS" | "ASIN_BRAND_SAME_AS" | "ASIN_CATEGORY_SAME_AS" | "ASIN_EXPANDED_FROM" | "ASIN_GENRE_SAME_AS" | "ASIN_IS_PRIME_SHIPPING_ELIGIBLE" | "ASIN_PRICE_BETWEEN" | "ASIN_PRICE_GREATER_THAN" | "ASIN_PRICE_LESS_THAN" | "ASIN_REVIEW_RATING_BETWEEN" | "ASIN_REVIEW_RATING_GREATER_THAN" | "ASIN_REVIEW_RATING_LESS_THAN" | "ASIN_SAME_AS" | "ASIN_SUBSTITUTE_RELATED" | "KEYWORD_GROUP_SAME_AS" | "QUERY_BROAD_REL_MATCHES" | "QUERY_HIGH_REL_MATCHES" | string;

export interface SponsoredProductsTargetingExpressionPredicateWithoutOther {
  readonly type: string;
  readonly value?: string;
}

export type SponsoredProductsTargetingType = "AUTO" | "MANUAL" | string;

export interface SponsoredProductsTargetMutationError {
  readonly errorType: string;
  readonly errorValue: Inline2322;
}

export interface SponsoredProductsTargetMutationErrorSelector {
  readonly biddingError?: Inline2338;
  readonly billingError?: Inline2339;
  readonly duplicateValueError?: Inline2340;
  readonly entityNotFoundError?: Inline2341;
  readonly entityQuotaError?: Inline2342;
  readonly entityStateError?: Inline2343;
  readonly expressionTypeError?: Inline2344;
  readonly internalServerError?: Inline2345;
  readonly malformedValueError?: Inline2346;
  readonly missingValueError?: Inline2347;
  readonly otherError?: Inline2348;
  readonly parentEntityError?: Inline2349;
  readonly rangeError?: Inline2350;
  readonly targetingClauseSetupError?: Inline2351;
  readonly throttledError?: Inline2352;
}

export interface SponsoredProductsTargetMutationExceptionResponseContent {
  readonly code: string;
  readonly errors?: ReadonlyArray<Inline2354>;
  readonly message: string;
}

export interface SponsoredProductsTargetPromotionGroup {
  readonly autoTargetingCampaignAdGroupId?: string;
  readonly autoTargetingCampaignAdIds?: ReadonlyArray<string>;
  readonly keywordCampaignAdGroupIds?: ReadonlyArray<string>;
  readonly productCampaignAdGroupIds?: ReadonlyArray<string>;
  readonly state?: string;
  readonly targetPromotionGroupId?: string;
  readonly targetPromotionGroupName?: string;
}

export type SponsoredProductsTargetPromotionGroupTargetDetails = Inline2371 | Inline2372;

export interface SponsoredProductsTargetPromotionGroupV2 {
  readonly adIds?: ReadonlyArray<string>;
  readonly destinationAdGroups?: ReadonlyArray<Inline2374>;
  readonly sourceAdGroupId?: string;
  readonly sourceCampaignId?: string;
  readonly state?: string;
  readonly targetPromotionGroupId?: string;
  readonly targetPromotionGroupName?: string;
}

export type SponsoredProductsTargetType = "ASIN" | "KEYWORD" | string;

export interface SponsoredProductsThrottledError {
  readonly cause?: Inline2377;
  readonly message: string;
  readonly reason: string;
}

export type SponsoredProductsThrottledErrorCode = "THROTTLED" | string;

export type SponsoredProductsThrottledErrorReason = "THROTTLED" | string;

export type SponsoredProductsThrottlingExceptionCode = "THROTTLED" | string;

export interface SponsoredProductsThrottlingExceptionResponseContent {
  readonly code: string;
  readonly message: string;
}

export type SponsoredProductsUnauthenticatedExceptionCode = "UNAUTHENTICATED" | string;

export interface SponsoredProductsUnauthenticatedExceptionResponseContent {
  readonly code?: string;
  readonly message?: string;
}

export type SponsoredProductsUnauthorizedErrorCode = "UNAUTHORIZED" | string;

export interface SponsoredProductsUnauthorizedExceptionResponseContent {
  readonly code: string;
  readonly message: string;
}

export type SponsoredProductsUnsupportedMediaTypeErrorCode = "UNSUPPORTED_MEDIA_TYPE" | string;

export interface SponsoredProductsUnsupportedMediaTypeExceptionResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface SponsoredProductsUnsupportedOperationError {
  readonly cause?: Inline2389;
  readonly message: string;
  readonly reason: string;
}

export type SponsoredProductsUnsupportedOperationErrorReason = "UNSUPPORTED_OPERATION" | string;

export interface SponsoredProductsUpdateAdGroup {
  readonly adGroupId: string;
  readonly defaultBid?: number;
  readonly name?: string;
  readonly state?: string;
}

export interface SponsoredProductsUpdateCampaign {
  readonly budget?: Inline2393;
  readonly campaignId: string;
  readonly dynamicBidding?: Inline2394;
  readonly endDate?: string;
  readonly name?: string;
  readonly offAmazonSettings?: Inline2396;
  readonly portfolioId?: string;
  readonly siteRestrictions?: ReadonlyArray<string>;
  readonly startDate?: string;
  readonly state?: string;
  readonly tags?: Inline2397;
  readonly targetingType?: string;
}

export interface SponsoredProductsUpdateCampaignNegativeKeyword {
  readonly keywordId: string;
  readonly state?: string;
}

export interface SponsoredProductsUpdateCampaignNegativeTargetingClause {
  readonly expression?: ReadonlyArray<Inline2400>;
  readonly state?: string;
  readonly targetId: string;
}

export interface SponsoredProductsUpdateKeyword {
  readonly bid?: number;
  readonly keywordId: string;
  readonly state?: string;
}

export interface SponsoredProductsUpdateNegativeKeyword {
  readonly keywordId: string;
  readonly state?: string;
}

export interface SponsoredProductsUpdateNegativeTargetingClause {
  readonly expression?: ReadonlyArray<Inline2404>;
  readonly state?: string;
  readonly targetId: string;
}

export interface SponsoredProductsUpdateProductAd {
  readonly adId: string;
  readonly state?: string;
}

export interface SponsoredProductsUpdateSponsoredProductsAdGroupsRequestContent {
  readonly adGroups: ReadonlyArray<Inline2407>;
}

export interface SponsoredProductsUpdateSponsoredProductsAdGroupsResponseContent {
  readonly adGroups: Inline2409;
}

export interface SponsoredProductsUpdateSponsoredProductsCampaignNegativeKeywordsRequestContent {
  readonly campaignNegativeKeywords: ReadonlyArray<Inline2425>;
}

export interface SponsoredProductsUpdateSponsoredProductsCampaignNegativeKeywordsResponseContent {
  readonly campaignNegativeKeywords: Inline2427;
}

export interface SponsoredProductsUpdateSponsoredProductsCampaignNegativeTargetingClausesRequestContent {
  readonly campaignNegativeTargetingClauses: ReadonlyArray<Inline2441>;
}

export interface SponsoredProductsUpdateSponsoredProductsCampaignNegativeTargetingClausesResponseContent {
  readonly campaignNegativeTargetingClauses: Inline2443;
}

export interface SponsoredProductsUpdateSponsoredProductsCampaignsRequestContent {
  readonly campaigns: ReadonlyArray<Inline2460>;
}

export interface SponsoredProductsUpdateSponsoredProductsCampaignsResponseContent {
  readonly campaigns: Inline2466;
}

export interface SponsoredProductsUpdateSponsoredProductsKeywordsRequestContent {
  readonly keywords: ReadonlyArray<Inline2489>;
}

export interface SponsoredProductsUpdateSponsoredProductsKeywordsResponseContent {
  readonly keywords: Inline2491;
}

export interface SponsoredProductsUpdateSponsoredProductsNegativeKeywordsRequestContent {
  readonly negativeKeywords: ReadonlyArray<Inline2508>;
}

export interface SponsoredProductsUpdateSponsoredProductsNegativeKeywordsResponseContent {
  readonly negativeKeywords: Inline2510;
}

export interface SponsoredProductsUpdateSponsoredProductsNegativeTargetingClausesRequestContent {
  readonly negativeTargetingClauses: ReadonlyArray<Inline2525>;
}

export interface SponsoredProductsUpdateSponsoredProductsNegativeTargetingClausesResponseContent {
  readonly negativeTargetingClauses: Inline2527;
}

export interface SponsoredProductsUpdateSponsoredProductsProductAdsRequestContent {
  readonly productAds: ReadonlyArray<Inline2544>;
}

export interface SponsoredProductsUpdateSponsoredProductsProductAdsResponseContent {
  readonly productAds: Inline2546;
}

export interface SponsoredProductsUpdateSponsoredProductsTargetingClausesRequestContent {
  readonly targetingClauses: ReadonlyArray<Inline2565>;
}

export interface SponsoredProductsUpdateSponsoredProductsTargetingClausesResponseContent {
  readonly targetingClauses: Inline2567;
}

export interface SponsoredProductsUpdateTargetingClause {
  readonly bid?: number;
  readonly expression?: ReadonlyArray<Inline2586>;
  readonly expressionType?: string;
  readonly state?: string;
  readonly targetId: string;
}

export type SponsoredProductsValueLimitErrorReason = "INVALID_ENUM_VALUE" | "NOT_IN_LIST" | "TOO_HIGH" | "TOO_LOW" | string;

export type SPRuleType = "PERFORMANCE" | "SCHEDULE" | string;

export interface SPTargetingCountryErrors {
  readonly code?: string;
  readonly countryCodes?: ReadonlyArray<string>;
  readonly message?: string;
}

export interface SPTargetingError {
  readonly code?: string;
  readonly details?: string;
}

export interface SPTORBudgetRecommendationError {
  readonly code?: string;
  readonly details?: string;
}

export type state = "ACTIVE" | "PAUSED" | string;

export type SuggestedBidValues = ReadonlyArray<number>;

export interface TargetableAsinCounts {
  readonly asinCounts?: Inline2595;
}

export interface TargetableCategories {
  readonly categoryTree?: string;
}

export interface TargetableCategoriesLoP {
  readonly categoryTree?: string;
}

export interface TargetingExpression {
  readonly type: string;
  readonly value?: string;
}

export type TargetingExpressionList = ReadonlyArray<Inline2600>;

export type TargetingExpressionListV4 = ReadonlyArray<Inline2602>;

export interface TargetingExpressionV4 {
  readonly type: string;
  readonly value?: string;
}

export interface TargetingGroupBidRecommendation {
  readonly action?: string;
  readonly adGroupId?: string;
  readonly suggestedBid?: number;
  readonly targetId?: string;
  readonly targetingGroupExpression?: string;
}

export type Theme = "BFCM_HOLIDAY" | "CONVERSION_OPPORTUNITIES" | "FALL_PRIME_DEAL_EVENT" | "PRIME_DAY" | string;

export interface ThemeBasedBidRecommendation {
  readonly bidRecommendationsForTargetingExpressions: ReadonlyArray<Inline2607>;
  readonly impactMetrics?: Inline2609;
  readonly theme: string;
}

export interface ThemeBasedBidRecommendationResponse {
  readonly bidRecommendations: ReadonlyArray<Inline2612>;
}

export interface ThemeBasedBidRecommendationResponseV4 {
  readonly bidRecommendations: ReadonlyArray<Inline2617>;
}

export interface ThemeBasedBidRecommendationResponseV5 {
  readonly bidRecommendations: ReadonlyArray<Inline2620>;
}

export interface ThemeBasedBidRecommendationV4 {
  readonly bidRecommendationsForTargetingExpressions: ReadonlyArray<Inline2629>;
  readonly theme: string;
}

export interface ThemeBasedBidRecommendationV5 {
  readonly bidAnalysesForTargetingExpressions?: ReadonlyArray<Inline2632>;
  readonly bidRecommendationsForTargetingExpressions: ReadonlyArray<Inline2637>;
  readonly theme: string;
}

export interface ThemedBid {
  readonly bid?: number;
  readonly matchType?: string;
  readonly rank?: number;
  readonly suggestedBid?: Inline2641;
  readonly theme?: string;
}

export interface ThemeRecommendation {
  readonly description?: string;
  readonly recommendedAsins?: ReadonlyArray<string>;
  readonly theme?: string;
}

export interface ThrottlingException {
  readonly code?: string;
  readonly details?: string;
}

export interface timeOfDay {
  readonly endTime?: string;
  readonly startTime?: string;
}

export interface UnauthorizedException {
  readonly code?: string;
  readonly details?: string;
}

export interface UnprocessableEntityException {
  readonly code?: string;
  readonly details?: string;
}

export interface UpdateBudgetRulesForSPCampaignsParams {
  readonly budgetRulesDetails?: ReadonlyArray<Inline2700>;
}

export interface UpdateBudgetRulesForSPCampaignsResponse {

}

export interface UpdateBudgetRulesResponse {
  readonly responses?: ReadonlyArray<Inline2648>;
}

export interface UpdateOptimizationRuleParams {
  readonly campaignIds: ReadonlyArray<string>;
  readonly campaignOptimizationId: string;
  readonly recurrence: string;
  readonly ruleAction: string;
  readonly ruleCondition?: ReadonlyArray<Inline2994>;
  readonly ruleName?: string;
  readonly ruleType: string;
}

export interface UpdateOptimizationRuleResponse {
  readonly data: Inline2996;
}

export interface UpdateOptimizationRulesParams {
  readonly optimizationRules: ReadonlyArray<Inline3025>;
}

export interface UpdateOptimizationRulesResponse {

}

export interface UpdateSPBudgetRulesRequest {
  readonly budgetRulesDetails?: ReadonlyArray<Inline2650>;
}

export interface UpdateSPCampaignOptimizationRuleResponse {
  readonly campaignOptimizationId?: string;
  readonly code?: string;
  readonly details?: string;
}

export interface UpdateSPCampaignOptimizationRulesRequest {
  readonly campaignIds: ReadonlyArray<string>;
  readonly campaignOptimizationId: string;
  readonly recurrence: string;
  readonly ruleAction: string;
  readonly ruleCondition?: ReadonlyArray<Inline2657>;
  readonly ruleName?: string;
  readonly ruleType: string;
}

export interface UpdateSponsoredProductsAdGroupsParams {
  readonly adGroups: ReadonlyArray<Inline2668>;
}

export interface UpdateSponsoredProductsAdGroupsResponse {

}

export interface UpdateSponsoredProductsCampaignNegativeKeywordsParams {
  readonly campaignNegativeKeywords: ReadonlyArray<Inline2740>;
}

export interface UpdateSponsoredProductsCampaignNegativeKeywordsResponse {

}

export interface UpdateSponsoredProductsCampaignNegativeTargetingClausesParams {
  readonly campaignNegativeTargetingClauses: ReadonlyArray<Inline2763>;
}

export interface UpdateSponsoredProductsCampaignNegativeTargetingClausesResponse {

}

export interface UpdateSponsoredProductsCampaignsParams {
  readonly campaigns: ReadonlyArray<Inline2796>;
}

export interface UpdateSponsoredProductsCampaignsResponse {

}

export interface UpdateSponsoredProductsKeywordsParams {
  readonly keywords: ReadonlyArray<Inline2886>;
}

export interface UpdateSponsoredProductsKeywordsResponse {

}

export interface UpdateSponsoredProductsNegativeKeywordsParams {
  readonly negativeKeywords: ReadonlyArray<Inline2911>;
}

export interface UpdateSponsoredProductsNegativeKeywordsResponse {

}

export interface UpdateSponsoredProductsNegativeTargetingClausesParams {
  readonly negativeTargetingClauses: ReadonlyArray<Inline2936>;
}

export interface UpdateSponsoredProductsNegativeTargetingClausesResponse {

}

export interface UpdateSponsoredProductsProductAdsParams {
  readonly productAds: ReadonlyArray<Inline2969>;
}

export interface UpdateSponsoredProductsProductAdsResponse {

}

export interface UpdateSponsoredProductsTargetingClausesParams {
  readonly targetingClauses: ReadonlyArray<Inline3097>;
}

export interface UpdateSponsoredProductsTargetingClausesResponse {

}

export interface ValidationException {
  readonly code?: string;
  readonly details?: string;
}

export interface Values {
  readonly clicks?: Inline2660;
  readonly conversions?: Inline2661;
  readonly impressions?: Inline2662;
}
