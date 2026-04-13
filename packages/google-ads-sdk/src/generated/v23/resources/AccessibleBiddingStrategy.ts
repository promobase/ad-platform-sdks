import type { BiddingStrategyType, MaximizeConversionValue, MaximizeConversions, TargetCpa, TargetImpressionShare, TargetRoas, TargetSpend } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AccessibleBiddingStrategy. Do not edit by hand.
export interface AccessibleBiddingStrategy {
  resourceName?: string;
  id?: string;
  name?: string;
  type?: BiddingStrategyType;
  ownerCustomerId?: string;
  ownerDescriptiveName?: string;
  maximizeConversionValue?: MaximizeConversionValue;
  maximizeConversions?: MaximizeConversions;
  targetCpa?: TargetCpa;
  targetImpressionShare?: TargetImpressionShare;
  targetRoas?: TargetRoas;
  targetSpend?: TargetSpend;
}
