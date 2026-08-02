import type { BiddingStrategyStatus, BiddingStrategyType, EnhancedCpc, MaximizeConversionValue, MaximizeConversions, TargetCpa, TargetImpressionShare, TargetRoas, TargetSpend } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.BiddingStrategy. Do not edit by hand.
export interface BiddingStrategy {
  resourceName?: string;
  id?: string;
  name?: string;
  status?: BiddingStrategyStatus;
  type?: BiddingStrategyType;
  currencyCode?: string;
  effectiveCurrencyCode?: string;
  alignedCampaignBudgetId?: string;
  campaignCount?: string;
  nonRemovedCampaignCount?: string;
  enhancedCpc?: EnhancedCpc;
  maximizeConversionValue?: MaximizeConversionValue;
  maximizeConversions?: MaximizeConversions;
  targetCpa?: TargetCpa;
  targetImpressionShare?: TargetImpressionShare;
  targetRoas?: TargetRoas;
  targetSpend?: TargetSpend;
}
