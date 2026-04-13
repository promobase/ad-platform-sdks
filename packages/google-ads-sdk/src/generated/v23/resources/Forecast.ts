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
