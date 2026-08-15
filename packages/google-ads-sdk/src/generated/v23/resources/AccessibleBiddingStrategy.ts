// @generated
// fingerprint: sha256:e3b94ea93d54a01da74cb150abc15b76930ebcb1f3307ba54e6eaeb131114730
// DO NOT EDIT: generated file; changes will be overwritten.
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
