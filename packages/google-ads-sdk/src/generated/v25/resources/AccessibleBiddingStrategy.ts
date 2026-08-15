// @generated
// fingerprint: sha256:198f1962fac797029959a7db81f6f9aa237fab19a0a4c792d0b393019a91167f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BiddingStrategyType, MaximizeConversionValue, MaximizeConversions, TargetCpa, TargetImpressionShare, TargetRoas, TargetSpend } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.AccessibleBiddingStrategy. Do not edit by hand.
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
