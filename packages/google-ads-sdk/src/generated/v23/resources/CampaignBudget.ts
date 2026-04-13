import type { BudgetDeliveryMethod, BudgetPeriod, BudgetStatus, BudgetType } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.CampaignBudget. Do not edit by hand.
export interface CampaignBudget {
  resourceName?: string;
  id?: string;
  name?: string;
  amountMicros?: string;
  totalAmountMicros?: string;
  status?: BudgetStatus;
  deliveryMethod?: BudgetDeliveryMethod;
  explicitlyShared?: boolean;
  referenceCount?: string;
  hasRecommendedBudget?: boolean;
  recommendedBudgetAmountMicros?: string;
  period?: BudgetPeriod;
  recommendedBudgetEstimatedChangeWeeklyClicks?: string;
  recommendedBudgetEstimatedChangeWeeklyCostMicros?: string;
  recommendedBudgetEstimatedChangeWeeklyInteractions?: string;
  recommendedBudgetEstimatedChangeWeeklyViews?: string;
  type?: BudgetType;
  alignedBiddingStrategyId?: string;
}
