// @generated
// fingerprint: sha256:16ce3edfbe9909b627479a170035dcd5a4b8d29040060c91dea1c0cd38ef77ea
// DO NOT EDIT: generated file; changes will be overwritten.
import type { EffectiveFrequencyBreakdown } from "../index.ts";

// Generated from google.ads.googleads.v23.services.Forecast. Do not edit by hand.
export interface Forecast {
  onTargetReach?: string;
  totalReach?: string;
  onTargetImpressions?: string;
  totalImpressions?: string;
  viewableImpressions?: string;
  effectiveFrequencyBreakdowns?: EffectiveFrequencyBreakdown[];
  onTargetCoviewReach?: string;
  totalCoviewReach?: string;
  onTargetCoviewImpressions?: string;
  totalCoviewImpressions?: string;
  conversions?: number;
  trueviewViews?: string;
  clicks?: string;
}
