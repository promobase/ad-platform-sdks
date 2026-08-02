import type { ValueRuleGeoLocationMatchType } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.ConversionValueRule.ValueRuleGeoLocationCondition. Do not edit by hand.
export interface ValueRuleGeoLocationCondition {
  excludedGeoTargetConstants?: string[];
  excludedGeoMatchType?: ValueRuleGeoLocationMatchType;
  geoTargetConstants?: string[];
  geoMatchType?: ValueRuleGeoLocationMatchType;
}
