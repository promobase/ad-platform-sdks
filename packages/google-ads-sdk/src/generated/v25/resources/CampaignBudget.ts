// @generated
// fingerprint: sha256:24ce089fd849a3f8808f3d421f6cd325d28df4f868d5d8484eb289e502ebe2f2
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BudgetDeliveryMethod, BudgetPeriod, BudgetStatus, BudgetType } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.CampaignBudget. Do not edit by hand.
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
