import type { BiddingStrategyStatus, BiddingStrategyType, EnhancedCpc, common_MaximizeConversionValue, common_MaximizeConversions, common_TargetCpa, common_TargetImpressionShare, common_TargetRoas, common_TargetSpend } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.BiddingStrategy. Do not edit by hand.
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
  maximizeConversionValue?: common_MaximizeConversionValue;
  maximizeConversions?: common_MaximizeConversions;
  targetCpa?: common_TargetCpa;
  targetImpressionShare?: common_TargetImpressionShare;
  targetRoas?: common_TargetRoas;
  targetSpend?: common_TargetSpend;
}
