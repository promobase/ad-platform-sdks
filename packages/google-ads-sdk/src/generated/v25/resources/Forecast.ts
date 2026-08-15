// @generated
// fingerprint: sha256:f36007606c7abf609beddb97e89682e266c4a3cbf202ac9142eab6b991ef6015
// DO NOT EDIT: generated file; changes will be overwritten.
import type { EffectiveFrequencyBreakdown } from "../index.ts";

// Generated from google.ads.googleads.v25.services.Forecast. Do not edit by hand.
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
